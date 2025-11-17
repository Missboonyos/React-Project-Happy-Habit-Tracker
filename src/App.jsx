//rafce
import React, { useState } from 'react'
import AddHabit from './components/habits/AddHabit'
import DeleteHabit from './components/habits/DeleteHabit'

import HabitList from './components/habits/HabitList'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import StreakCount from './components/streak/StreakCount'

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Morning workout", completed: false, completedDate: []},
    { id: 2, name: "Read 30 mins", completed: false, completedDate: []},
    { id: 3, name: "Drink 2L water", completed: false, completedDate: []},
    { id: 4, name: "Meal prep", completed: false, completedDate: []},
    { id: 5, name: "Work", completed: false, completedDate: []},
    { id: 6, name: "Learn", completed: false, completedDate: []}
  ])

  // Toggle habit completion
  const toggleHabit = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ))
  }

  // Delete habit
  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }

  return (
    <>
      <h1>Happy Habit Tracker!</h1>
      <hr />
      <Header />
      <br />
      {/* Pass habits and functions to HabitList */}
      <HabitList 
        habits={habits} 
        onToggle={toggleHabit}
        onDelete={deleteHabit}
      />
      <AddHabit />
      <DeleteHabit />
      
     
      <br />
      <StreakCount />
      <br />
      <Footer />
    </>
  )
}

export default App





// { id: 1, name: "Morning workout", completed: false, completedDate: []},
//     { id: 2, name: "Read 30 mins", completed: false, completedDate: []},
//     { id: 3, name: "Drink 2L water", completed: false, completedDate: []},
//     { id: 4, name: "Meal prep", completed: false, completedDate: []},
//     { id: 5, name: "Work", completed: false, completedDate: []},
//     { id: 6, name: "Learn", completed: false, completedDate: []}



// { id: 1, name: "Morning workout", completed: false},
//     { id: 2, name: "Read 30 mins", completed: false},
//     { id: 3, name: "Drink 2L water", completed: false},
//     { id: 4, name: "Meal prep", completed: false},
//     { id: 5, name: "Work", completed: false},
//     { id: 6, name: "Learn", completed: false}