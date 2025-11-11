import dayjs from "dayjs"

export const summarize = (text: string, limit: number = 50) => {
  if (text.length <= limit) {
    return text
  }

  return text.substring(0, limit) + "..."
}

export const formatDate = (date: string, format = "DD MMMM YYYY") => {
  return dayjs(date).format(format)
}

export const paginate = <T>(
  items: T[],
  currentPage: number,
  totalPages: number
) => {
  const startIndex: number = (currentPage - 1) * totalPages
  return items.slice(startIndex).filter((_, index) => index < totalPages)
}
