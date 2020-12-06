import React from "react";
import {useStore} from "../../../../hooks/useStore";

export interface IProps {
    id: number
}

const Row = ({id}: IProps) => {
    const {showStore} = useStore()
    const currentShow = showStore.getShowById(id)
    if (!currentShow) {
        return null
    }
    const {image, name, genreToString, runtime, getCurrentRating} = currentShow
    return (
        <tr>
            <td><img src={image.medium} alt=""/></td>
            <td><h4>{name}</h4></td>
            <td><h4>{genreToString}</h4></td>
            <td><h4>{runtime}</h4></td>
            <td><h4>{getCurrentRating}</h4></td>
        </tr>
    )
}

export default Row