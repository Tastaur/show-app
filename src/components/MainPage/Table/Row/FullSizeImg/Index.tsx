import React from "react";
import classes from './style.module.css'

export interface IProps {
    isShowImage: (x: boolean) => void
    imgSrc: string
}

const FullSizeImg = ({isShowImage, imgSrc}: IProps) => {
    // I use this construction to avoid errors in the console
    return (
        <tr>
            <td className={classes.imgWrapper} onClick={() => isShowImage(false)}>
                <img src={imgSrc}/>
            </td>
        </tr>
    )
}

export default FullSizeImg