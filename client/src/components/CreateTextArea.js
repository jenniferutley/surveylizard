import React from 'react'
import axios from "axios"
import { store } from 'react-notifications-component'

export default function CreateTextArea({ textArea, setTextArea }) {
  const handleQuestionChange = (e) => {
    setTextArea({ question: e.target.value })
  }

  const handleSave = (e) => {
    e.preventDefault()
    axios.post("/surveys/update/textarea/" + window.location.href.split("/").pop(), {
      textArea: textArea
    })
      .then(res => {
        // console.log(res.data)
        store.addNotification({
          message: "Question added!",
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
      })
  }

  return (
    <div className="Create-TextArea">
      <h3 className="create-title">Long Text</h3>
      <p className="create-instructions">This question type allows the user to respond with one or more sentences. </p>
      <div className="center-flex">
        <div>
          <form onSubmit={handleSave}>
            <div className="question-row">
              <input type="text" className="question" placeholder="enter question" required onChange={handleQuestionChange} />
            </div>
            <div>
              <textarea rows="4" cols="40" placeholder="(user's answer will go here)" disabled />
            </div>
            <input type="submit" value="add question" className="btn center" />
          </form>
        </div>
      </div>

    </div >
  )
}
