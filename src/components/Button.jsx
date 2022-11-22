import React from 'react'

const Button = ({otherQuote}) => {
  return (
    <i onClick={otherQuote} className='bx bx-log-in-circle bx-md btn'></i>
  )
}

export default Button