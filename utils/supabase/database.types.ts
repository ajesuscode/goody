export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      goals: {
        Row: {
          id: string
          rewards: number | null
          time_allowed: number | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          rewards?: number | null
          time_allowed?: number | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          rewards?: number | null
          time_allowed?: number | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "goals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "rootusers"
            referencedColumns: ["id"]
          }
        ]
      }
      kids: {
        Row: {
          id: string
          img: string | null
          name: string | null
          totalrewards: number | null
          user_id: string | null
        }
        Insert: {
          id?: string
          img?: string | null
          name?: string | null
          totalrewards?: number | null
          user_id?: string | null
        }
        Update: {
          id?: string
          img?: string | null
          name?: string | null
          totalrewards?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "kids_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "rootusers"
            referencedColumns: ["id"]
          }
        ]
      }
      kidsgoals: {
        Row: {
          goal_id: string | null
          id: string
          isdone: boolean | null
          kid_id: string | null
        }
        Insert: {
          goal_id?: string | null
          id?: string
          isdone?: boolean | null
          kid_id?: string | null
        }
        Update: {
          goal_id?: string | null
          id?: string
          isdone?: boolean | null
          kid_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "kidsgoals_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "goals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kidsgoals_kid_id_fkey"
            columns: ["kid_id"]
            isOneToOne: false
            referencedRelation: "kids"
            referencedColumns: ["id"]
          }
        ]
      }
      rootusers: {
        Row: {
          authorized: boolean | null
          avatar_url: string | null
          email: string | null
          full_name: string | null
          id: string
          payment: boolean | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          authorized?: boolean | null
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          payment?: boolean | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          authorized?: boolean | null
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          payment?: boolean | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rootusers_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
