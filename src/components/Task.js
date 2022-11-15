import React from 'react'
import { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import Description from './Description'

const Task = ({ task, onDelete, onToggle, onAddHours, onEditDesc }) => {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div className={`task ${task.highNeeds ? 'highNeeds' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
            {task.proposal}{' '}
            <FaPencilAlt 
                style={{ color: '#f48c06', cursor: 'pointer' }} 
                onClick={() => setShowDescription(!showDescription)}
            /> 
        </h3>
        <p>Start Date: {task.day}</p>
        {showDescription && <Description task={ task } onDelete = {onDelete} onAddHours = {onAddHours} onEditDesc={onEditDesc}/>}
    </div>
  )
}

export default Task
