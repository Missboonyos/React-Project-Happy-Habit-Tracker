//rafce
import React from 'react'

// Make HabitItem show each Habit
// Receive onToggle, onDelete
const HabitItem = ({ habit, onToggle, onDelete }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={habit.completed}
        onChange={()=> onToggle(habit.id)} // Call function when clicked!
      />
      <span>{habit.name}</span>
      <button onClick={()=> onDelete(habit.id)}>Delete</button>
    </div>
  )
}

export default HabitItem