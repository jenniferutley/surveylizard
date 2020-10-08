import React, { useState, useEffect } from 'react'
import axios from "axios"
import CreateRadio from "./CreateRadio"
import CreateCheckbox from "./CreateCheckbox"
import CreateText from "./CreateText"

export default function EditSurvey() {
  const [surveys, setSurveys] = useState([])
  const [showCreateRadio, setShowCreateRadio] = useState(false)
  const [radio, setRadio] = useState({})
  const [showCreateCheckbox, setShowCreateCheckbox] = useState(false)
  const [checkbox, setCheckbox]= useState({})
  const [showCreateText, setShowCreateText] = useState(false)
  const [text, setText]= useState({})

  useEffect(() => {
    axios.get("/surveys/" + window.location.href.split("/").pop())
      .then(res => {
        setSurveys(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleCreateRadio = (e) => {
    setShowCreateRadio(!showCreateRadio)
  }

  const handleCreateCheckbox = (e) => {
    setShowCreateCheckbox(!showCreateCheckbox)
  }

  const handleCreateText = (e) => {
    setShowCreateText(!showCreateText)
  }

  return (
    <div className="Edit-Survey">
      <h2>Survey {surveys.name}</h2>
      <p>{surveys.description}</p>
      <p>{JSON.stringify(surveys.radio)}</p>
      <p>{JSON.stringify(surveys.checkbox)}</p>
      <p>{JSON.stringify(surveys.text)}</p>

      <div className="button-group center-flex">
        <button type="button" className="button-group-start" title="add single answer item" onClick={handleCreateRadio}><ion-icon name="list-outline"></ion-icon></button>
        <button type="button" className="button-group-middle" title="add multiple answer item" onClick={handleCreateCheckbox}><ion-icon name="checkbox-outline"></ion-icon></button>
        <button type="button" className="button-group-middle" title="add short text item" onClick={handleCreateText}><ion-icon name="reorder-two-outline"></ion-icon></button>
        <button type="button" className="button-group-middle" title="add long text item"><ion-icon name="reorder-four-outline"></ion-icon></button>
        <button type="button" className="button-group-end" title="add Likert scale"><ion-icon name="options-outline"></ion-icon></button>
      </div>
      {showCreateRadio && <CreateRadio
        radio={radio}
        setRadio={setRadio}
      />}
      {showCreateCheckbox && <CreateCheckbox
      checkbox={checkbox}
      setCheckbox={setCheckbox} />}
      {showCreateText && <CreateText
      text={text}
      setText={setText} />}

    </div>
  )
}