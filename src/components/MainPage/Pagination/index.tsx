import React from 'react'
import classes from './style.module.css'

export interface IProps {
    totalCount: number,
    currentPage: number,
    pageSize: number,
    setCurrentPage: (number: number) => void
}

const Paginator = ({totalCount, currentPage, pageSize, setCurrentPage}: IProps) => {

    const pagesCount = Math.ceil(totalCount / pageSize)
    const pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    if (pageSize > totalCount) {
        return null
    }
    return <div className={classes.wrapper}>
        <button disabled={currentPage === 1} onClick={() => {
            setCurrentPage(currentPage - 1)
        }}>
            &larr;
        </button>
        {pages
            .map((p) => {
                return <span
                    className={currentPage === p ? classes.active : ''}
                    key={p}
                    onClick={() => setCurrentPage(p)}
                >{p}</span>
            })}
        <button disabled={pagesCount <= currentPage}
                onClick={() => setCurrentPage(currentPage + 1)}>
            &rarr;
        </button>

    </div>
}


export default Paginator