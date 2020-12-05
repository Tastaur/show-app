import React from "react";
import {observer} from "mobx-react";
import {useStore} from "../../../hooks/useStore";
import classes from './style.module.scss'

export interface IProps {
    setSearchText: (val: string) => void,
    setCurrentGenre: (val: string) => void,
    searchText: string,
    selectGenre: string,
}


const Header = ({setCurrentGenre, setSearchText, searchText, selectGenre}: IProps) => {
    const searchHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if (e) {
            setSearchText(e.currentTarget.value)
        }
    }
    const selectHandler = (e: React.FormEvent<HTMLSelectElement>) => {
        if (e) {
            setSearchText('')
            setCurrentGenre(e.currentTarget?.value)
        }
    }
    const {showStore} = useStore()
    const genres = showStore.genreList
    return (
        <header className={classes.wrapper}>
                <div>
                    <h2>Show list</h2>
                </div>
                <div className={classes.setting}>
                    <div>
                        <input
                            className={classes.input}
                            placeholder="Поиск по названию"
                            type="text" value={searchText}
                            onChange={searchHandler}/>
                    </div>
                    <div>
                        <select defaultValue={selectGenre}
                                className={classes.select}
                                placeholder="Выберите категорию"
                                value={selectGenre}
                                onChange={selectHandler}>
                            <option value="">All</option>
                            {genres.map(item => <option value={item} key={item}>{item}</option>)}
                        </select>
                    </div>
                </div>
        </header>

    )
}

export default observer(Header)