
import React, { useState } from 'react'

export const DropDown = ({ chosenCategory, category }) => {
  const [category, setCategory] = useState('Cocktail');

  return (
    <div>
      <label>
        <h3>Select: </h3>
        <select className='select'
          onChange={event => setCategory(event.target.value)}
          value={category}>
          <option value='Wine'>Wine</option>
          <option value='Cocktails'>Cocktails</option>
          <option value='Vodka'>Vodka</option>
        </select>
      </label>
    </div>
  )
}