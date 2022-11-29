import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import raw from './dummy.csv'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch All Tasks 
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:4000/tasks')
    const data = await res.json()

    fetch(raw) 
      .then(r => r.text())
      .then(text => {
        console.log('text decoded:', text);
      });

    // console.log(data)
    return data
  }

  // Fetch A Single Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`)
    const data = await res.json()

    console.log(data)
    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:4000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task }

    // setTasks([...tasks, newTask])
  }

  // Add Hours to a Task
  const addHours = async (id, hoursToAdd) => {
    const taskToAdd = await fetchTask(id)
    const updTask = { ...taskToAdd, hours: parseFloat(taskToAdd.hours) + parseFloat(hoursToAdd) }

    const res = await fetch(`http://localhost:4000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })

  const data = await res.json()

  setTasks(tasks.map((task) => task.id === id ? { ...task, hours: parseFloat(data.hours)} : task))
  }

  const editTask = async (id, newName, newDay, newProposal, newBusinessName, newStreetAddress, newCity, newState, newZipCode, newBusinessPhone, newHighNeeds, newStatus) => {
    const taskToEdit = await fetchTask(id)
    const updTask = { ...taskToEdit, name: newName, day: newDay, proposal: newProposal, businessName: newBusinessName, streetAddress: newStreetAddress,
    city: newCity, state: newState, zipcode: newZipCode, businessPhone: newBusinessPhone, highNeeds: newHighNeeds, status: newStatus}

    const res = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, name: data.name, day: data.day, proposal: data.proposal, businessName: data.businessName, streetAddress: data.streetAddress,
      city: data.city, state: data.state, zipcode: data.zipcode, businessPhone: data.businessPhone, highNeeds: data.highNeeds, status: data.status} : task))
  }

  // Delete Task
const deleteTask = async (id) => {
  if (window.confirm('Are you sure you want to delete this? It will be deleted permanently.')) {
    await fetch(`http://localhost:4000/tasks/${id}`, {
    method: 'DELETE'
  })

  setTasks(tasks.filter((task) => task.id !== id))
}
}

// Toggle High Needs
const toggleHighNeeds = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = { ...taskToToggle, highNeeds: !taskToToggle.highNeeds }

  const res = await fetch(`http://localhost:4000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })

  const data = await res.json()

  setTasks(tasks.map((task) => task.id === id ? { ...task, highNeeds: data.highNeeds} : task))
}

  return (
    <div className="container">
      <Header title='Axel' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      <p>Press the "Add" button to open the form for a new volunteering service. If you'd like to add hours for 
        current proposals, press the pencil icon to open and close the description boxes. 
      </p>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleHighNeeds} onAddHours={addHours} onEditDesc={editTask}/> : 'No Volunteering Tasks yet!'}
    </div>
  );
}

export default App;
