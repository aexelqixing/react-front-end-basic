import React from 'react'
import { useState } from 'react'
import AddHours from './AddHours'
import Button from './Button'
import EditTask from './EditTask'

const Description = ({ task, onDelete, onAddHours, onEditDesc }) => {
    const [showAddHours, setShowAddHours] = useState(false)
    const [showEditDesc, setShowEditDesc] = useState(false)

  return (
    <div className="description">
      <h3>Business Name: {task.businessName}</h3>
      <h3>Street Address: {task.streetAddress}, {task.city}, {task.state} {task.zipcode}</h3>
      {task.businessPhone ? <h3>Business Phone: {task.businessPhone}</h3> : ''}
      <h3>High Needs: {task.highNeeds ? 'Yes' : 'No'}</h3>
      <h3 className="hours">Hours: {task.hours}</h3>
      <Button bgColor="#bfd200" textColor="black" text={showEditDesc ? "Close Editing" : "Edit Description"} onClick={() => setShowEditDesc(!showEditDesc)}/>
      <Button bgColor="#480ca8" text={showAddHours ? "Close Hours" : "Edit Hours"} onClick={() => setShowAddHours(!showAddHours)} />
      <Button bgColor="#d00000" text="Delete" onClick={() => onDelete(task.id)} />
      {showAddHours && <AddHours task = {task} onAddHours={onAddHours}/>}
      {showEditDesc && <EditTask task = {task} onEdit={onEditDesc}/>}
    </div>
  )
}

export default Description
