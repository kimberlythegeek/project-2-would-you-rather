import React from 'react'

const NoQuestions = () => (
  <div>
    You've answered all available questions!
    Why create a new one?
    <button className='btn btn-primary' disabled>Create Question</button>
  </div>
)

export default NoQuestions