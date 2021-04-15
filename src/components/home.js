import React from 'react'
import {Link, Route} from "react-router-dom";
import SearchBar from './search-bar';

export default () =>
    <>
        <h1>Home</h1>
        <br/>
        <div className="list-group">
                <SearchBar/>
        </div>
    </>
