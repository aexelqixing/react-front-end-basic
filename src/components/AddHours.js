import React from 'react'
import { useState } from 'react'

const AddHours = ({ task, onAddHours }) => {
    const [hours, setHours] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!hours) {
            alert('Please add all the required information.')
            return
        }

        onAddHours(task.id, hours)
        setHours(0)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Hours: </label>
          <input type="number" placeholder="15" value={hours} onChange={(e) => setHours(e.target.value)}></input>
      </div>
      <input type='submit' value='Save Hours?' className="btn btn-block"></input>
    </form>
  )
}

export default AddHours
