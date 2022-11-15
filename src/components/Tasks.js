import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, onAddHours, onEditDesc }) => {
  return (
    <>
        {tasks.map((task, index) => (
            <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} onAddHours={onAddHours} onEditDesc={onEditDesc}/>
        ))}
    </>
  )
}

export default Tasks
