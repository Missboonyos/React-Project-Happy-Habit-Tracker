//rafce
import React from 'react'

const StreakCount = ({ habits }) => {
  const completedCount = habits.filter(habit => habit.completed).length
  const totalCount = habits.length

  return (
    <div>
        <h3>Today's Progress:</h3>
        <p>{completedCount} out of {totalCount} habits completed</p>
        {completedCount === totalCount && totalCount > 0 && (
          <p>🔥 Perfect day! All habits done!</p>
        )}
    </div>
  )
}

export default StreakCount