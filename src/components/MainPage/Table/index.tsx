import React from "react";
import Row from "./Row/Index";
import HeaderRow from "./HeaderRow/Index";
import {Show} from "../../../store/showStore/Show";
import classes from "./style.module.scss";


export interface IProps {
    showList: Show[],
    searchText: string
}

const Table = ({showList, searchText}: IProps) => {

    const emptyString = searchText ? `По запросу ${searchText} ничего не найдено` : 'Ничего не найдено'

    return (
        <>
            {showList.length > 0 ?
                (<table className={classes.table}>
                    <HeaderRow/>
                    <tbody className={classes.body}>
                    {showList.map(item => <Row
                        key={item.id}
                        id={item.id}
                    />)}
                    </tbody>
                </table>) : (
                    <div className={classes.empty}>
                        <h2>{emptyString}</h2>
                    </div>
                )
            }
        </>
    )
}

export default Table