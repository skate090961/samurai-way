import React from 'react'
import s from './Pagination.module.css'
import pagesCreator from "../../utils/pagination/pagesCreator";

type PaginationType = {
    totalPagesCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}

const Pagination: React.FC<PaginationType> = ({
                                                  setCurrentPage,
                                                  currentPage,
                                                  totalPagesCount
                                              }) => {
    const setCurrentPageHandler = (currentPage: number) => setCurrentPage(currentPage)
    const nextPageHandler = () => setCurrentPage(currentPage + 1)
    const previousPageHandler = () => setCurrentPage(currentPage - 1)

    const pages = [] as number[]
    pagesCreator(pages, totalPagesCount, currentPage)

    const buttonsListRender = pages.map(b =>
        <button
            className={`${s.button} ${b === currentPage ? s.active : ''}`}
            onClick={() => setCurrentPageHandler(b)}
        >
            {b}
        </button>
    )

    return (
        <div className={s.pagination}>
            <button
                className={s.button}
                disabled={currentPage <= 1}
                onClick={previousPageHandler}
            >{'<'}</button>
            {buttonsListRender}
            <button
                className={s.button}
                disabled={currentPage >= totalPagesCount}
                onClick={nextPageHandler}
            >{'>'}</button>
        </div>
    );
};

export default Pagination;