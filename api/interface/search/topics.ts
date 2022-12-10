export interface Topics {
  total_count: number
  incomplete_results: boolean
  items: TopicsProps[]
}

export interface TopicsProps {
  name: string
  display_name: any
  short_description: any
  description: any
  created_by: any
  released: any
  created_at: string
  updated_at: string
  featured: boolean
  curated: boolean
  score: number
}