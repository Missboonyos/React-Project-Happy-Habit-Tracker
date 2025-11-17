//rafce
import React from 'react'
import HabitItem from './HabitItem'

// Make HabitList display Habits
const HabitList = ({ habits, onToggle, onDelete }) => {
  return (
    <div>
      <h2>Today's Habits:</h2>
      {habits.map(habit => (
        <HabitItem 
          key={habit.id} 
          habit={habit}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default HabitList