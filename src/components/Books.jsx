
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Books() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://seussology.info/api/books')
        .then(response => response.json())
        .then(json => setBooks(json))
    }, [])
    return (
        <div>
            <> 
                <div className='container'>
                        <div className='row'>
                            {books.map(book => (
                                <div className='col-md-3' key={book.id}>
                                    <div className=' image p-2'>
                                    <Link to={`${book.id}`}>
                                    <img src={book.image} className='card-img-top'/>
                                    </Link>
                                    </div>
                                </div>
                            ))}
                            </div>           
                    </div>
            </>
        </div>
    )
}