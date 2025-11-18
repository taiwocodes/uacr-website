import { ReactElement } from "react"

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
  icon?: ReactElement
}

export interface NewsItem {
  image: string
  title: string
  description: string
  date: string
}

export interface Vacancy {
  role: string
  description: string
  mode: string[]
  tag: string
}
