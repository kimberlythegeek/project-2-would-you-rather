import React from 'react'

const FilterButton = ({ toggleFilter, filter }) => (
  <div className='row'>
    <button
      className='btn btn-sm btn-outline-primary filter-button'
      onClick={toggleFilter}>
        Show { filter === 'unanswered'
              ? 'Answered'
              : 'Unanswered'
            } Questions
    </button>
  </div>
)

export default FilterButton