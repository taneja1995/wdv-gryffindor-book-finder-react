import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import BookDetailsService from '../services/details-search-service'

const DetailsScreen = () => {
    const {bookId} = useParams()
    const history = useHistory()
    const [book, setbook] = useState({})
    const [active, setActive] = useState(false)
    useEffect(() => {
        findResultbyId()
        // BookDetailsService.findResultbyId(bookId)
        //     .then((data) => {
        //         // console.log("I am here ",data)
        //         setbook(data)
        //     })
    }, [])

    const findResultbyId = () => {
        BookDetailsService.findResultbyId(bookId)
            .then((data) => {
                console.log("I am here ",data)
                setbook(data)
                setActive(true)
            })
    }
    return(
        <div>
            <button onClick={()=>{history.goBack()}}>Back</button>
            {/*{bookId}*/}
            {book.id}
            {
                active &&
                <div className="container-fluid">
                <h2>{book.volumeInfo.title}</h2>
                <img src={book.volumeInfo.imageLinks.thumbnail} width={100}/>
                    <p>{book.volumeInfo.authors}</p>
                    {
                        (book.volumeInfo.averageRating !== undefined && typeof book.volumeInfo.averageRating!==undefined) &&
                        <p>{book.volumeInfo.averageRating}</p>
                    }
                    {
                        (book.volumeInfo.description !== undefined && typeof book.volumeInfo.description!==undefined) &&
                            <p>{book.volumeInfo.description}</p>
                    }
                </div>
                }
            {/*<h2>{book.volumeInfo.title}</h2>*/}
            {/*<p>*/}
            {/*    <img src={book.volumeInfo.imageLinks.large} width={100}/>*/}

            {/*    {book.volumeInfo.authors}*/}
            {/*</p>*/}
            {/*<div>*/}
            {/*    {book.Actors}*/}
            {/*    <ul>*/}
            {/*        {*/}
            {/*            book.Actors && book.Actors.split(",")*/}
            {/*                .map((actor)=>{*/}
            {/*                    return(*/}
            {/*                        <li>{actor}</li>*/}
            {/*                    )*/}
            {/*                })*/}
            {/*        }*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    )
}

export default DetailsScreen