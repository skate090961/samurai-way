import React from "react"
import s from "./Pagination.module.css"
import pagesCreator from "../../utils/pagination/pagesCreator"
import Pagination1 from "@mui/material/Pagination"

type PaginationType = {
  totalPagesCount: number
  currentPage: number
  setCurrentPage: (currentPage: number) => void
  isLoading: boolean
}

const Pagination: React.FC<PaginationType> = ({ setCurrentPage, currentPage, totalPagesCount, isLoading }) => {
  const setCurrentPageHandler = (currentPage: number) => setCurrentPage(currentPage)
  const nextPageHandler = () => setCurrentPage(currentPage + 1)
  const previousPageHandler = () => setCurrentPage(currentPage - 1)

  const pages = [] as number[]
  pagesCreator(pages, totalPagesCount, currentPage)

  const isPreviousPageButtonDisabled = currentPage <= 1 || isLoading
  const isNextPageButtonDisabled = currentPage >= totalPagesCount || isLoading

  const buttonsListRender = pages.map((b) => (
    <button
      key={b}
      className={`${s.button} ${b === currentPage ? s.active : ""}`}
      onClick={() => setCurrentPageHandler(b)}
      disabled={isLoading}
    >
      {b}
    </button>
  ))

  return (
    <div className={s.pagination}>
      <button className={s.button} disabled={isPreviousPageButtonDisabled} onClick={previousPageHandler}>
        {"<"}
      </button>
      {buttonsListRender}
      <button className={s.button} disabled={isNextPageButtonDisabled} onClick={nextPageHandler}>
        {">"}
      </button>
    </div>
  )
}

export default Pagination
