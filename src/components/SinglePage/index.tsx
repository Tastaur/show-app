import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useParams} from 'react-router-dom'
import {useStore} from "../../hooks/useStore";
import Preloader from "../Preloader";
import {SinglePageRouterParams} from "./types";
import Layout from "./Layout";


const SinglePage = () => {
    const {id} = useParams() as SinglePageRouterParams

    const {showStore} = useStore()
    useEffect(() => {
        if (showStore.shows.size === 0) {
            showStore.getShows()
        }
    }, [])

    if (!showStore.isFinishLoading) {
        return <Preloader/>
    }

    return (
        <div>
            <Layout id={id}/>
        </div>
    )
}

export default observer(SinglePage)