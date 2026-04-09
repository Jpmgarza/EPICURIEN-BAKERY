# Supabase Setup Guide

## 1. Create Supabase Project

1. Go to [app.supabase.com](https://app.supabase.com)
2. Sign up or log in
3. Click "New project"
4. Enter project name: `epicurien-bakery`
5. Set a strong database password
6. Choose region closest to Bangkok: **Singapore**
7. Click "Create new project" (takes ~2 min)

## 2. Get Credentials

Once project is created:
1. Go to **Settings → API** (left sidebar)
2. Copy **Project URL** 
3. Copy **anon public key** (under "Project API keys")
4. Paste both into `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx...
   ```

## 3. Create Storage Bucket

1. Go to **Storage** (left sidebar)
2. Click **Create a new bucket**
3. Name: `products`
4. Uncheck "Private bucket" (make it public)
5. Click **Create bucket**
6. Click the `products` bucket → **Policies**
7. Click **New policy → For queries → SELECT**
   - Choose template: "Anyone can read" (give it a name)
   - Click **Create**
8. **For inserts/updates**, click **New policy → For inserts → INSERT**
   - Name it (e.g., "Anyone can upload")
   - Change SQL to allow file uploads (use "Authenticated users" or "Anyone")
   - Click **Create**

## 4. Usage

### Upload Image
```tsx
import { uploadProductImage } from "@/lib/supabase";

const url = await uploadProductImage(file, "croissant");
// Returns: https://xxxxx.supabase.co/storage/v1/object/public/products/croissant-123456.jpg
```

### Use ImageUpload Component
```tsx
import { ImageUpload } from "@/components/shared/ImageUpload";

export default function MyPage() {
  return (
    <ImageUpload
      productName="croissant"
      onUploadComplete={(url) => console.log("Uploaded:", url)}
    />
  );
}
```

### Get Public URL
```tsx
import { getImageUrl } from "@/lib/supabase";

const url = getImageUrl("products", "products/croissant-123456.jpg");
```

### Delete Image
```tsx
import { deleteProductImage } from "@/lib/supabase";

await deleteProductImage("products/croissant-123456.jpg");
```

## 5. Security Notes

- **`anon/public` key** is safe to expose in browser (it's in `.env.local` with `NEXT_PUBLIC_` prefix)
- **Storage policies** control who can upload/read — configure them in Supabase console
- For authenticated uploads (e.g., admin panel), you'd add Supabase Auth separately

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "Missing Supabase credentials" | Check `.env.local` has correct keys |
| Upload returns `null` | Check bucket exists and policies allow uploads |
| CORS error | Ensure bucket is public and policies are configured |
| Image not loading | Use `getImageUrl()` or check bucket settings in Supabase console |
