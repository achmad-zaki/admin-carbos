export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Admin: {
        Row: {
          created_at: string
          email: string | null
          id: number
          no_telp: number | null
          password: string | null
          username: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          no_telp?: number | null
          password?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          no_telp?: number | null
          password?: string | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
