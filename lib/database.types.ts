export type QuoteStatus = 'new' | 'contacted' | 'site_visit' | 'quoted' | 'converted' | 'lost'

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      quotes: {
        Row: {
          id: string
          name: string
          phone: string
          address: string
          monthly_bill: string
          system_type: string
          status: QuoteStatus
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          phone: string
          address: string
          monthly_bill?: string
          system_type?: string
          status?: QuoteStatus
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          status?: QuoteStatus
          notes?: string | null
          updated_at?: string
        }
      }
    }
  }
}

export type QuoteRow = Database['public']['Tables']['quotes']['Row']
