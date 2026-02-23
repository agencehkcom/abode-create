export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          title: string;
          slug: string;
          category: string;
          cover_image: string;
          images: string[];
          lieu: string;
          surface: string;
          budget: string;
          annee: string;
          mission: string;
          excerpt: string;
          contexte: string;
          contraintes: string;
          solution: string;
          resultats: string;
          display_order: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          category: string;
          cover_image: string;
          images?: string[];
          lieu: string;
          surface: string;
          budget: string;
          annee: string;
          mission: string;
          excerpt: string;
          contexte: string;
          contraintes: string;
          solution: string;
          resultats: string;
          display_order?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["projects"]["Insert"]>;
      };
      before_after: {
        Row: {
          id: string;
          project_id: string;
          before_image: string;
          after_image: string;
          label: string | null;
          display_order: number;
        };
        Insert: {
          id?: string;
          project_id: string;
          before_image: string;
          after_image: string;
          label?: string | null;
          display_order?: number;
        };
        Update: Partial<Database["public"]["Tables"]["before_after"]["Insert"]>;
      };
    };
  };
}

export type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];
export type ProjectInsert = Database["public"]["Tables"]["projects"]["Insert"];
export type ProjectUpdate = Database["public"]["Tables"]["projects"]["Update"];
export type BeforeAfterRow = Database["public"]["Tables"]["before_after"]["Row"];
export type BeforeAfterInsert = Database["public"]["Tables"]["before_after"]["Insert"];
export type BeforeAfterUpdate = Database["public"]["Tables"]["before_after"]["Update"];
