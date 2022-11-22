import React from 'react'
import Button from './Button'

const QuoteBox = ({quote, otherQuote}) => {
    return (
        <div className="card">
            <p>
            "{quote.quote}"
                <p className='card__autor'>-{quote.author}</p>
              <Button otherQuote={otherQuote} />
            </p>
        </div>
      
    )
}

export default QuoteBox