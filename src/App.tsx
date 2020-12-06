import React from 'react';
import './index.css';
import MainPage from "./components/MainPage";
import {Route} from 'react-router-dom'
import SinglePage from "./components/SinglePage";

function App() {
    return (
        <div className="App">
            <Route path={'/:id'} render={() => <SinglePage/>}/>
            <Route path={'/'} exact render={() => <MainPage/>}/>
        </div>
    )
}

export default App;
