import React from 'react'

const VoteButton = ({ handleAnswer }) => (
  <button
    name='optionOne'
    className='btn btn-primary'
    onClick={handleAnswer}
  >Choose</button>
)

export default VoteButton