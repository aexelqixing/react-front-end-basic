import React from 'react'
import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [day, setDay] = useState('')
    const [proposal, setProposal] = useState('')
    const [businessName, setbusinessName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipCode] = useState('');
    const [businessPhone, setPhone] = useState('');
    const [highNeeds, setHighNeeds] = useState(false)
    const [hours, setHours] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name || !day || !proposal || !businessName || !streetAddress || !city || !state || !zipcode) {
            alert('Please add all the required information.')
            return
        }
        
        onAdd({ name, day, proposal, businessName, streetAddress, city, state, zipcode, businessPhone, highNeeds, hours })

        setName('')
        setDay('')
        setProposal('')
        setbusinessName('')
        setStreetAddress('')
        setCity('')
        setState('')
        setZipCode('')
        setPhone('')
        setHighNeeds(false)
        setHours(0)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
          <label>Name:(*) </label>
          <input type="text" placeholder="Axel Lea" value={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div className="form-control">
          <label>Day and Time (MM/DD/YYYY HH:MM AM):(*) </label>
          <input type="text" placeholder="01/01/2032 12:01 AM" value={day} onChange={(e) => setDay(e.target.value)}></input>
      </div>
      <div className="form-control">
          <label>Proposal:(*) </label>
          <input type="text" placeholder="Blowing People Up" value={proposal} onChange={(e) => setProposal(e.target.value)}></input>
      </div>
      <div className="form-control">
          <label>Agency/Business Name:(*) </label>
          <input type="text" placeholder="Organization XIII" value={businessName} onChange={(e) => setbusinessName(e.target.value)}></input>
      </div>
      <div className="form-control">
          <label>Street Address (if online, say "Online"):(*) </label>
          <input type="text" placeholder="123 Darkness St" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)}></input>
      </div>
      <div className="form-control">
          <label>City (if online, say "Online"):(*) </label>
          <input type="text" placeholder="Castle Of Oblivion" value={city} onChange={(e) => setCity(e.target.value)}></input>
      </div>
      <div className="form-control">
          <label>State (if online, say "Online"):(*) </label>
          <input type="text" placeholder="Land of Departure" value={state} onChange={(e) => setState(e.target.value)}></input>
      </div>
      <div className="form-control">
          <label>Zip Code (if online, say "Online"):(*) </label>
          <input type="text" placeholder="00000" value={zipcode} onChange={(e) => setZipCode(e.target.value)}></input>
      </div>
      <div className="form-control">
          <label>Agency/Business Phone Number: </label>
          <input type="text" placeholder="774-893-6172" value={businessPhone} onChange={(e) => setPhone(e.target.value)}></input>
      </div>
      <div className="form-control form-control-check">
          <label>High Needs </label>
          <input type="checkbox" checked={highNeeds} value={highNeeds} onChange={(e) => setHighNeeds(e.currentTarget.checked)}></input>
      </div>

      <input type='submit' value='Save Task?' className="btn btn-block"></input>
    </form>
  )
}

export default AddTask
