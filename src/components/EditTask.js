import React from 'react'
import { useState } from "react"

const EditTask = ({ task, onEdit }) => {
    const [name, setName] = useState(task.name)
    const [day, setDay] = useState(task.day)
    const [proposal, setProposal] = useState(task.proposal)
    const [businessName, setbusinessName] = useState(task.businessName);
    const [streetAddress, setStreetAddress] = useState(task.streetAddress);
    const [city, setCity] = useState(task.city);
    const [state, setState] = useState(task.state);
    const [zipcode, setZipCode] = useState(task.zipcode);
    const [businessPhone, setPhone] = useState(task.businessPhone);
    const [highNeeds, setHighNeeds] = useState(task.highNeeds)
    const [status, setStatus] = useState('requested')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name || !day || !proposal || !businessName || !streetAddress || !city || !state || !zipcode) {
            alert('Please add all the required information.')
            return
        }

        onEdit(task.id, name, day, proposal, businessName, streetAddress, city, state, zipcode, businessPhone, highNeeds, status)

        setName(name)
        setDay(day)
        setProposal(proposal)
        setbusinessName(businessName)
        setStreetAddress(streetAddress)
        setCity(city)
        setState(state)
        setZipCode(zipcode)
        setPhone(businessPhone)
        setHighNeeds(highNeeds)
        setStatus('requested')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name:(*) </label>
                <input type="text" placeholder="Axel Lea" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Day and Time:(*) </label>
                <input type="text" placeholder="Jan 1st at 11:59pm" value={day} onChange={(e) => setDay(e.target.value)}></input>
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

export default EditTask
