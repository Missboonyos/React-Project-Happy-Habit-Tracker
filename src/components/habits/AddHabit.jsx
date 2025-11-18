//rafce
import React, { useState } from 'react'

// Create the AddHabit form
const AddHabit = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent page refresh
    if (inputValue.trim()) { // only add if not empty
      onAdd(inputValue)
      setInputValue('') // Clear input after adding
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Add new habit...'
          value={inputValue}
          onChange={(e)=> setInputValue(e.target.value) }
        />
        <button type='submit'>Add Habit</button>
    </form>
  )
}

export default AddHabit