import React, {useState} from 'react';
import {Link} from "react-router-dom";
import searchService from "../services/search-service";

const SearchBar = (
    {}) => {
    const [searchTerm, setSearchTerm] = useState("palace")
    const [results, saveResult] = useState(null)
    const [active, setActive] = useState(false)
    const findResultForKeyword=(searched) =>{
        // console.log("called")
        searchService.findResult(searched)
            .then((results) => {
                // console.log("test",results)
                saveResult(results);
            setActive(true);}
            )

        // console.log(results)
    }
    return(
        <div>
            <div>
            <input onChange={(e) => setSearchTerm(e.target.value)}
                   value={searchTerm} className="form-control"/>
            <Link
                className="btn btn-primary"
                onClick={() =>
                    findResultForKeyword(searchTerm)
                }>
                Search
            </Link>
            </div>
            {/*{console.log(results)}*/}
            {
            active &&
            <>{
                results.items.map(result =>
                    <li>
                        <Link to={`/details/${result.id}`}>
                            {result.volumeInfo.title}{result.id}
                        </Link>
                    </li>
                )
            }
            </>
            }
            {/*{searchTerm}*/}
        </div>
    )
    }
export default SearchBar