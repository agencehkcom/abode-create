import { useCallback, useState } from "react";
import { useStorage } from "@/hooks/use-storage";
import { Button } from "@/components/ui/button";
import { Upload, X, Loader2 } from "lucide-react";

interface ImageUploaderProps {
  slug: string;
  folder: string;
  value: string;
  onChange: (url: string) => void;
  onRemove?: () => void;
  label?: string;
}

export function ImageUploader({ slug, folder, value, onChange, onRemove, label }: ImageUploaderProps) {
  const { upload, uploading } = useStorage();
  const [preview, setPreview] = useState<string>(value);

  const handleFile = useCallback(async (file: File) => {
    const ext = file.name.split(".").pop() ?? "webp";
    const timestamp = Date.now();
    const path = `${slug}/${folder}/${timestamp}.${ext}`;
    const url = await upload(path, file);
    setPreview(url);
    onChange(url);
  }, [slug, folder, upload, onChange]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file?.type.startsWith("image/")) handleFile(file);
    },
    [handleFile]
  );

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  return (
    <div className="space-y-2">
      {label && <p className="text-sm font-medium">{label}</p>}
      {preview ? (
        <div className="relative group rounded-lg overflow-hidden border border-border">
          <img src={preview} alt="Preview" className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <label className="cursor-pointer">
              <Button variant="secondary" size="sm" asChild>
                <span>
                  <Upload className="h-4 w-4 mr-1" />
                  Remplacer
                </span>
              </Button>
              <input type="file" accept="image/*" className="hidden" onChange={handleInput} />
            </label>
            {onRemove && (
              <Button variant="destructive" size="sm" onClick={onRemove}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-secondary transition-colors"
        >
          {uploading ? (
            <Loader2 className="h-8 w-8 mx-auto animate-spin text-muted-foreground" />
          ) : (
            <>
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Glissez une image ou cliquez pour sélectionner
              </p>
              <label className="cursor-pointer">
                <Button variant="outline" size="sm" asChild>
                  <span>Parcourir</span>
                </Button>
                <input type="file" accept="image/*" className="hidden" onChange={handleInput} />
              </label>
            </>
          )}
        </div>
      )}
    </div>
  );
}
