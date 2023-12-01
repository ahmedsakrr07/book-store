
import { useEffect, useState } from 'react'
export default function Quotes() {

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch('https://seussology.info/api/quotes/random/10')
        .then(response => response.json())
        .then(json => setQuotes(json))
        // .then (json => console.log(json))

        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <> 
            <div className='container'>
                    <div className='row'>
                        {quotes.map(quote => (
                            <div className='col-md-6' key={quote.id}>
                                <div className='card mt-3 mb-3 p-3'>
                                    <h1>{quote.text}</h1>
                                    <p> <span>__</span> Dr.Seuss in Daisy Valley</p>      
                                </div>
                            </div>
                        ))}
                    </div>          
                </div>
            </>
        </div>
    )
}