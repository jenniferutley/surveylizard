import React, { useState } from 'react'
import axios from "axios"
import  { store } from 'react-notifications-component'


export default function CreateSurvey() {
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
      .then(res => {
        // console.log(res.data)
        store.addNotification({
          message: "Survey Created!",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2500
          }
        })
      }
      )
      .catch((err) => {
        console.log(err)
        store.addNotification({
          message: "Please provide a unique survey name.",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2500
          }
        })
      })
    // window.location = "/viewsurveys"
  }

  // document.body.style.backgroundColor = "#edece8"
  // document.body.style.backgroundImage = "none"

  return (
    <div className="Create-Survey">
      <h2>Create a New Survey</h2>
      <br />
      <br />
      <div className="form-group">
        <form onSubmit={handleOnSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label className="input-label" htmlFor="name">name of survey</label>
              <input type="text" id="name" name="name" onChange={handleNameChange} required />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="description">description (optional)</label>
              <input type="text" id="description" name="description" onChange={handleDescriptionChange} />
            </div>
          </div>
          <input type="submit" value="create survey" className="btn center create-button" />
        </form>
      </div>
    </div>
  )
}
