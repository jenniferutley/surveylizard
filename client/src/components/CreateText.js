import React from 'react'
import axios from "axios"
import  { store } from 'react-notifications-component'

export default function CreateText({ text, setText }) {
  const handleQuestionChange = (e) => {
    setText({ question: e.target.value })
  }


  const handleSave = (e) => {
    e.preventDefault()
    axios.post("/surveys/update/text/" + window.location.href.split("/").pop(), {
      text: text
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
    <div className="Create-Text">
      <h2>Create Short Answer</h2>
      <div className="center-flex">
        <div>
          <form onSubmit={handleSave}>
            <div className="question-row">
              <input type="text" className="question" placeholder="enter question text" required onChange={handleQuestionChange} />
            </div>
            <div>
              <input type="text" className="answer" placeholder="(user's answer will go here)" disabled />
            </div>
            <input type="submit" value="add question" className="btn center" />
          </form>
        </div>
      </div>

    </div >
  )
}
