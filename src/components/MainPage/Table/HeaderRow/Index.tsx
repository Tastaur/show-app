import React from "react";
import classes from "./style.module.css";

const HeaderRow = () => {

    return (
        <thead>
        <tr className={classes.row}>
            <td>{null}</td>
            <td><h2>Title</h2></td>
            <td><h2>Genres</h2></td>
            <td><h2>Duration</h2></td>
            <td><h2>Rating</h2></td>
        </tr>
        </thead>
    )
}

export default HeaderRow