//rafce
import React, { useEffect, useState } from 'react'
import AddHabit from './components/habits/AddHabit'
import HabitList from './components/habits/HabitList'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import StreakCount from './components/streak/StreakCount'

const App = () => {

  // beginning step
  // const [habits, setHabits] = useState([
  //   { id: 1, name: "Morning workout", completed: false, completedDate: []},
  //   { id: 2, name: "Read 30 mins", completed: false, completedDate: []},
  //   { id: 3, name: "Drink 2L water", completed: false, completedDate: []},
  //   { id: 4, name: "Meal prep", completed: false, completedDate: []},
  //   { id: 5, name: "Work", completed: false, completedDate: []},
  //   { id: 6, name: "Learn", completed: false, completedDate: []}
  // ])
  // console.log(habits)


    // Load habits from localStorage on start
    const [habits, setHabits] = useState(()=> {
      const saved = localStorage.getItem('habits')
      return saved ? JSON.parse(saved): [
        // Default habits if nothing saved
        { id: 1, name: "Morning workout", completed: false, completedDate: []},
        { id: 2, name: "Read 30 mins", completed: false, completedDate: []},
        { id: 3, name: "Drink 2L water", completed: false, completedDate: []},
        { id: 4, name: "Meal prep", completed: false, completedDate: []},
        { id: 5, name: "Work", completed: false, completedDate: []},
        { id: 6, name: "Learn", completed: false, completedDate: []}
  ] 
    })
    
    // Save to localStorage whenever habits change
    useEffect(() => {
      localStorage.setItem('habits', JSON.stringify(habits))
    }, [habits])

  // Add Toggle Function
  // Function to toggle habit completion
  const toggleHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id
        ? {...habit, completed: !habit.completed} // flip true / false
        : habit // leave other habits unchanged
      ))
  }

  // Function to add habit
  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(), // Simple way to generate unique ID
      name: name,
      completed: false,
      completedDate: []
    }
    setHabits([...habits, newHabit]) // Add to end of array
  }

  // Function to delete habit
  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
    // Keep all habits EXCEPT the one with this id
  }
  
  return (
    <>
      {/* <h1>Happy Habit Tracker!</h1>      */}
      <Header />  
      {/* Pass habits data to HabitList */} 
      {/* Pass the toggle function down  */}
      <HabitList 
        habits={habits} 
        onToggle={toggleHabit} 
        onDelete={deleteHabit} // Pass delete function
      />  
      <AddHabit onAdd={addHabit}/> {/*Pass the function  */}
      <StreakCount habits={habits} /> 
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