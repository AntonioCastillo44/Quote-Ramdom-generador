import './App.css'
import QuoteBox from './components/QuoteBox'
import bdQuotes from './bd/quote.json'
import { useState } from 'react';
function App() {

  const color = ['#bfedbe', '#69d2cd', '#b9f1d6', '#f1f6ce', '#e6fcd9', '#cdf2d6']

  const randomQuotes = (array) => {
    const random = array[Math.floor(Math.random() * array.length)];
    return random;
}

const [quotes, setQuotes] = useState(randomQuotes(bdQuotes))
const [colors, setColors] = useState(randomQuotes(color))

const otherQuote = () => {
    const newQuote = randomQuotes(bdQuotes)
    setQuotes(newQuote)

    const Newcolor = randomQuotes(color)
    setColors(Newcolor)
}

  return (
    <div className="App" style={ {color: colors, backgroundColor: colors  } }>
      <QuoteBox quote={quotes} otherQuote={otherQuote}/>
    </div>
  )
}

export default App
