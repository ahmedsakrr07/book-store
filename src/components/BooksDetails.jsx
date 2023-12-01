import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BooksDetails() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(json => setBook(json))
      .catch(error => {
        console.error('Error fetching book details:', error);
      });
  }, []);

  return (
    <div>
      {book ? (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={book.image} className='card-img-top'/>
                    </div>
                    <div className='col-md-9'>
                        <h1 className='card-title'>{book.title}</h1>
                        <p className='card-text'>{book.description}</p>
                    </div>
                </div>
            </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
