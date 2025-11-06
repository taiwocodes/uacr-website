export interface Link {
  title: string
  path?: string
  subLinks?: SubLink[]
}

export interface SubLink {
  title: string
  path: string
  image?: string
  logo?: string
}

export interface NewsItem {
  image: string
  title: string
  description: string
  date: string
}
