//rafce
import React from 'react'

// Make HabitItem show each Habit
const HabitItem = ({ habit, onToggle, onDelete }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={habit.completed}
        onChange={() => onToggle(habit.id)}
      />
      <span style={{ textDecoration: habit.completed ? 'line-through' : 'none' }}>
        {habit.name}
      </span>
      <button onClick={() => onDelete(habit.id)}>Delete</button>
    </div>
  )
}

export default HabitItem