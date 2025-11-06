import _ from "lodash"

import { paginate } from "@/utils/lib"
import { useMemo, useState } from "react"

const useDataFilter = <T extends { tag: string }>(data: T[]) => {
  const [activeTag, setActiveTag] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize] = useState(6)

  const uniqueTags = useMemo(() => {
    const tags = data.map((item) => item.tag)
    return _.uniq(tags)
  }, [data])

  const { paginated, itemCount } = useMemo(() => {
    const posts = activeTag
      ? data.filter((post) => post.tag === activeTag)
      : data
    const paginated = paginate(posts, currentPage, pageSize)

    return { paginated, itemCount: posts.length }
  }, [activeTag, pageSize, currentPage, data])

  return {
    activeTag,
    uniqueTags,
    paginated,
    itemCount,
    data,
    currentPage,
    pageSize,
    onPageChange: setCurrentPage,
    onTagChange: setActiveTag,
  }
}

export default useDataFilter
