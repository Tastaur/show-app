import React, {useState} from "react";
import {useStore} from "../../../../hooks/useStore";
import {observer} from "mobx-react";
import FullSizeImg from "./FullSizeImg/Index";
import {Link}  from 'react-router-dom'
import classes from './style.module.css'

export interface IProps {
    id: number
}

const Row = ({id}: IProps) => {
    const {showStore} = useStore()
    const [isShowImage, setIsShowImage] = useState(false)

    const currentShow = showStore.getShowById(id)
    if (!currentShow) {
        return null
    }
    const {image, name, genreToString, runtime, getCurrentRating} = currentShow
    return (
        <>
            <tr>
                <td><img src={image.medium} alt="" onClick={() => setIsShowImage(true)}/></td>
                <td><Link to={`/${id}`} className={classes.link}><h4>{name}</h4></Link></td>
                <td><h4>{genreToString}</h4></td>
                <td><h4>{runtime}</h4></td>
                <td><h4>{getCurrentRating}</h4></td>

            </tr>
            {isShowImage ? <FullSizeImg imgSrc={image.original} isShowImage={setIsShowImage}/> : null}
        </>
    )
}

export default observer(Row)