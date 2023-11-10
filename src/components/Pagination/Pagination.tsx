import React from "react";
import s from "./Pagination.module.css";
import pagesCreator from "../../utils/pagination/pageCreator";

interface PaginationProps {
    updateCurrentPage: (currentPage: number) => void
    pagesCount: number
    currentPage: number
}

class Pagination extends React.Component<PaginationProps> {
    render() {
        const pages = [] as number[]
        pagesCreator(pages, this.props.pagesCount, this.props.currentPage)

        return (
            <div className={s.pagination}>
                <button
                    className={s.button}
                    onClick={() => this.props.updateCurrentPage(this.props.currentPage - 1)}
                >{'<'}</button>
                {pages.map(p =>
                    <button
                        className={`${s.button} ${this.props.currentPage === p ? s.active : ''}`}
                        onClick={() => this.props.updateCurrentPage(p)}
                    >{p}</button>
                )}
                <button
                    className={s.button}
                    onClick={() => this.props.updateCurrentPage(this.props.currentPage + 1)}
                >{'>'}</button>
            </div>
        )
    }
}

export default Pagination