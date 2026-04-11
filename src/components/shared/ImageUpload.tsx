"use client";

import { useState } from "react";
import { uploadProductImage } from "@/lib/supabase";

interface ImageUploadProps {
  onUploadComplete?: (imageUrl: string) => void;
  productName?: string;
}

export function ImageUpload({
  onUploadComplete,
  productName = "product",
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload
    handleUpload(file);
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    setError(null);

    const imageUrl = await uploadProductImage(file, productName);

    if (imageUrl) {
      onUploadComplete?.(imageUrl);
      setError(null);
    } else {
      setError("Upload failed. Please try again.");
      setPreview(null);
    }

    setUploading(false);
  };

  return (
    <div className="w-full">
      <label className="block">
        <span className="sr-only">Choose image</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-[var(--secondary-brand)] file:text-white
            hover:file:bg-[var(--secondary-brand)]
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </label>

      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="Preview"
            className="max-w-xs rounded-md border border-[var(--divider)]"
          />
        </div>
      )}

      {uploading && <p className="mt-2 text-sm text-[var(--muted-text)]">Uploading...</p>}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
