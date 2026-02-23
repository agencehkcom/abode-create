import { useState } from "react";
import { supabase } from "@/lib/supabase";

const BUCKET = "project-images";

export function useStorage() {
  const [uploading, setUploading] = useState(false);

  const upload = async (path: string, file: File): Promise<string> => {
    setUploading(true);
    try {
      const { error } = await supabase.storage
        .from(BUCKET)
        .upload(path, file, { upsert: true });

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from(BUCKET)
        .getPublicUrl(path);

      return urlData.publicUrl;
    } finally {
      setUploading(false);
    }
  };

  const remove = async (path: string): Promise<void> => {
    const { error } = await supabase.storage.from(BUCKET).remove([path]);
    if (error) throw error;
  };

  const getPublicUrl = (path: string): string => {
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    return data.publicUrl;
  };

  return { upload, remove, getPublicUrl, uploading };
}
