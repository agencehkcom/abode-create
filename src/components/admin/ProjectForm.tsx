import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectFormSchema, type ProjectFormValues } from "@/lib/validators";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageUploader } from "./ImageUploader";
import { ImageReorder } from "./ImageReorder";
import { BeforeAfterManager, type BeforeAfterPair } from "./BeforeAfterManager";
import { useStorage } from "@/hooks/use-storage";
import { Save, Loader2 } from "lucide-react";
import { useState, useCallback } from "react";

interface ProjectFormProps {
  defaultValues?: Partial<ProjectFormValues>;
  beforeAfterPairs?: BeforeAfterPair[];
  onSubmit: (data: ProjectFormValues, pairs: BeforeAfterPair[]) => Promise<void>;
  loading?: boolean;
}

export function ProjectForm({ defaultValues, beforeAfterPairs = [], onSubmit, loading }: ProjectFormProps) {
  const [pairs, setPairs] = useState<BeforeAfterPair[]>(beforeAfterPairs);

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      category: "",
      cover_image: "",
      images: [],
      lieu: "",
      surface: "",
      budget: "Sur demande",
      annee: "",
      mission: "",
      excerpt: "",
      contexte: "",
      contraintes: "",
      solution: "",
      resultats: "",
      display_order: 0,
      is_published: false,
      ...defaultValues,
    },
  });

  const slug = form.watch("slug") || "new-project";
  const { upload, uploading } = useStorage();

  const generateSlug = () => {
    const title = form.getValues("title");
    const generated = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    form.setValue("slug", generated);
  };

  const handleGalleryUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const currentImages = form.getValues("images");
    const newUrls: string[] = [];

    for (const file of files) {
      const ext = file.name.split(".").pop() ?? "webp";
      const timestamp = Date.now() + Math.random();
      const path = `${slug}/gallery/${timestamp}.${ext}`;
      const url = await upload(path, file);
      newUrls.push(url);
    }

    form.setValue("images", [...currentImages, ...newUrls]);
  }, [slug, upload, form]);

  const handleSubmit = form.handleSubmit(async (data) => {
    await onSubmit(data, pairs);
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="info">Informations</TabsTrigger>
          <TabsTrigger value="textes">Textes</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="before-after">Avant/Après</TabsTrigger>
        </TabsList>

        {/* Onglet Informations */}
        <TabsContent value="info" className="space-y-4 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Titre</Label>
              <Input id="title" {...form.register("title")} placeholder="Nom du projet" />
              {form.formState.errors.title && (
                <p className="text-sm text-destructive">{form.formState.errors.title.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <div className="flex gap-2">
                <Input id="slug" {...form.register("slug")} placeholder="nom-du-projet" />
                <Button type="button" variant="outline" onClick={generateSlug}>
                  Auto
                </Button>
              </div>
              {form.formState.errors.slug && (
                <p className="text-sm text-destructive">{form.formState.errors.slug.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Catégorie</Label>
              <Input id="category" {...form.register("category")} placeholder="Architecture, Architecture Intérieure..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lieu">Lieu</Label>
              <Input id="lieu" {...form.register("lieu")} placeholder="Anduze (30)" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="surface">Surface</Label>
              <Input id="surface" {...form.register("surface")} placeholder="130 m²" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget</Label>
              <Input id="budget" {...form.register("budget")} placeholder="Sur demande" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="annee">Année</Label>
              <Input id="annee" {...form.register("annee")} placeholder="2024" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mission">Mission</Label>
            <Input id="mission" {...form.register("mission")} placeholder="Rénovation complète / Architecture" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="display_order">Ordre d'affichage</Label>
              <Input
                id="display_order"
                type="number"
                {...form.register("display_order", { valueAsNumber: true })}
              />
            </div>
            <div className="flex items-center gap-3 pt-6">
              <Switch
                checked={form.watch("is_published")}
                onCheckedChange={(checked) => form.setValue("is_published", checked)}
              />
              <Label>Publié</Label>
            </div>
          </div>
        </TabsContent>

        {/* Onglet Textes */}
        <TabsContent value="textes" className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="excerpt">Introduction / Extrait</Label>
            <Textarea id="excerpt" {...form.register("excerpt")} rows={3} placeholder="Texte d'intro poétique..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contexte">Contexte</Label>
            <Textarea id="contexte" {...form.register("contexte")} rows={4} placeholder="Récit du contexte..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contraintes">Contraintes</Label>
            <Textarea id="contraintes" {...form.register("contraintes")} rows={4} placeholder="Les contraintes du projet..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="solution">Solution</Label>
            <Textarea id="solution" {...form.register("solution")} rows={4} placeholder="Les solutions apportées..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resultats">Résultats / Anecdote</Label>
            <Textarea id="resultats" {...form.register("resultats")} rows={4} placeholder="Les résultats et anecdotes..." />
          </div>
        </TabsContent>

        {/* Onglet Images */}
        <TabsContent value="images" className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label>Image de couverture</Label>
            <ImageUploader
              slug={slug}
              folder="cover"
              value={form.watch("cover_image")}
              onChange={(url) => form.setValue("cover_image", url)}
            />
            {form.formState.errors.cover_image && (
              <p className="text-sm text-destructive">{form.formState.errors.cover_image.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Galerie ({form.watch("images").length} images)</Label>
              <label className="cursor-pointer">
                <Button variant="outline" size="sm" asChild disabled={uploading}>
                  <span>
                    {uploading ? <Loader2 className="h-4 w-4 mr-1 animate-spin" /> : null}
                    Ajouter des images
                  </span>
                </Button>
                <input type="file" accept="image/*" multiple className="hidden" onChange={handleGalleryUpload} />
              </label>
            </div>
            <ImageReorder
              images={form.watch("images")}
              onChange={(imgs) => form.setValue("images", imgs)}
            />
          </div>
        </TabsContent>

        {/* Onglet Avant/Après */}
        <TabsContent value="before-after" className="mt-6">
          <BeforeAfterManager slug={slug} pairs={pairs} onChange={setPairs} />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end pt-4 border-t border-border">
        <Button type="submit" disabled={loading} className="gradient-accent text-black font-semibold">
          {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
          Enregistrer
        </Button>
      </div>
    </form>
  );
}
