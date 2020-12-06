import React from "react";
import {observer} from "mobx-react";
import {Link, Redirect} from 'react-router-dom'
import {useStore} from "../../../hooks/useStore";
import ReactHtmlParser from 'react-html-parser';
import classes from './style.module.css'


export interface IProps {
    id: string
}

const Layout = ({id}: IProps) => {

    const {showStore} = useStore()
    const currentShow = showStore.getShowById(Number(id))

    if (!currentShow) {
        return <Redirect to='/'/>
    }

    const {image, name, genreToString, summary, getCurrentRating, runtime} = currentShow
    return (
        <div className={classes.wrapper}>
            <img src={image.original || image.medium} alt=""/>
            <h3>{name}</h3>
            <p>Genres : {genreToString}</p>
            <p>Duration : {runtime}</p>
            <p>Rating : {getCurrentRating}</p>
            <p>Description: {ReactHtmlParser(summary)}</p>
            <Link to='/'>
                <button>Back to list</button>
            </Link>
        </div>
    )
}

export default observer(Layout)