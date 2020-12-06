import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {useStore} from "../../hooks/useStore";
import Preloader from "../Preloader";
import Paginator from "./Pagination";
import Table from "./Table";
import Header from "./Header";
import classes from './style.module.css'

const MainPage = () => {
    const {showStore} = useStore()
    useEffect(() => {
        showStore.getShows()
    }, [])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState('')
    const [currentGenre, setCurrentGenre] = useState('')
    useEffect(() => {
        setCurrentPage(1)
    }, [currentGenre, searchText])
    if (showStore.isLoading) {
        return <Preloader/>
    }
    const pageSize = 50

    const sortedList = showStore.getSortedShowList(currentGenre)
        .filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))


    const listToShow = sortedList.slice((currentPage - 1) * pageSize, currentPage * pageSize)

    return (
        <div className={classes.wrapper}>
            <Header searchText={searchText}
                    selectGenre={currentGenre}
                    setCurrentGenre={setCurrentGenre}
                    setSearchText={setSearchText}/>
            <Table showList={listToShow} searchText={searchText}/>
            <Paginator totalCount={sortedList.length}
                       currentPage={currentPage}
                       pageSize={pageSize}
                       setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default observer(MainPage)