import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageUploader } from "./ImageUploader";
import { Plus, Trash2 } from "lucide-react";

export interface BeforeAfterPair {
  before_image: string;
  after_image: string;
  label: string;
}

interface BeforeAfterManagerProps {
  slug: string;
  pairs: BeforeAfterPair[];
  onChange: (pairs: BeforeAfterPair[]) => void;
}

export function BeforeAfterManager({ slug, pairs, onChange }: BeforeAfterManagerProps) {
  const addPair = () => {
    onChange([...pairs, { before_image: "", after_image: "", label: "" }]);
  };

  const removePair = (index: number) => {
    onChange(pairs.filter((_, i) => i !== index));
  };

  const updatePair = (index: number, field: keyof BeforeAfterPair, value: string) => {
    const updated = [...pairs];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      {pairs.map((pair, index) => (
        <div key={index} className="border border-border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Paire {index + 1}</h4>
            <Button variant="ghost" size="sm" onClick={() => removePair(index)}>
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
          <Input
            placeholder="Label (ex: Cuisine, Façade...)"
            value={pair.label}
            onChange={(e) => updatePair(index, "label", e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <ImageUploader
              slug={slug}
              folder="before-after"
              value={pair.before_image}
              onChange={(url) => updatePair(index, "before_image", url)}
              label="Image Avant"
            />
            <ImageUploader
              slug={slug}
              folder="before-after"
              value={pair.after_image}
              onChange={(url) => updatePair(index, "after_image", url)}
              label="Image Après"
            />
          </div>
        </div>
      ))}
      <Button variant="outline" onClick={addPair}>
        <Plus className="h-4 w-4 mr-2" />
        Ajouter une paire Avant/Après
      </Button>
    </div>
  );
}
