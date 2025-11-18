//rafce
import React from 'react'
import HabitItem from './HabitItem'

// Make HabitList display Habits
// Receive onToggle, onDelete
const HabitList = ({ habits, onToggle, onDelete }) => {
  return (
    <div>
      <h2>Today's Habits:</h2>
      {habits.map(habit => (
        <HabitItem 
          key={habit.id} 
          habit={habit}
          onToggle={onToggle} // Pass onToggle down to HabitItem
          onDelete={onDelete} // Pass it down to HabitItem
        />
      ))}
    </div>
  )
}

export default HabitList