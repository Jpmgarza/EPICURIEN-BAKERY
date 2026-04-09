import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase credentials. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Image upload to 'products' bucket
export async function uploadProductImage(
  file: File,
  productName: string
): Promise<string | null> {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${productName}-${Date.now()}.${fileExt}`;
    const filePath = `products/${fileName}`;

    const { error } = await supabase.storage
      .from("products")
      .upload(filePath, file, { upsert: false });

    if (error) {
      console.error("Upload error:", error);
      return null;
    }

    // Return public URL
    const { data } = supabase.storage.from("products").getPublicUrl(filePath);
    return data.publicUrl;
  } catch (err) {
    console.error("Upload failed:", err);
    return null;
  }
}

// Retrieve public image URL
export function getImageUrl(bucket: string, path: string): string {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

// Delete image from storage
export async function deleteProductImage(filePath: string): Promise<boolean> {
  try {
    const { error } = await supabase.storage
      .from("products")
      .remove([filePath]);

    if (error) {
      console.error("Delete error:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Delete failed:", err);
    return false;
  }
}
