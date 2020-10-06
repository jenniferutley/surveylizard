import React, { useState } from 'react'
import axios from "axios"

export default function Create() {
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
   
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setName(e.target.value)
    setDescription(e.target.value)
    axios.post("/surveys/add", { 
      name: name, 
      description: description
    })
      .then(res => console.log(res.data))
      .catch((err) => {
        console.log(err)
      })
    // window.location = "/view"
  }

  return (
    <div className="Create">      
      <h2>Create a new survey</h2>
      <br />
      <br />
      <div className="form-group">
        <form onSubmit={handleOnSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label className="input-label" htmlFor="name">name of survey</label>
              <input type="text" id="name" name="name" onChange={handleNameChange} />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="description">description (optional)</label>
              <input type="text" id="description" name="description" onChange={handleDescriptionChange} />
            </div>
          </div>        
          <input type="submit" value="create survey" className="btn center" />
        </form>
      </div>
    </div>
  )
}
