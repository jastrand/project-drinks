import React, { useState } from 'react'

export const Dropdown = () => {
  const [category, setCategory] = useState('Cocktail');

  return (
    <div>
      <h3>Select: </h3>
      <select
        onChange={(event) => setCategory(event.target.value)}
        value={category}>
        <option value="Wine">Wine</option>
        <option value="Cocktails">Cocktails</option>
        <option value="Vodka">Vodka</option>
      </select>

    </div>
  )
}