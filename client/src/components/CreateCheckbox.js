import React from 'react'
import axios from "axios"
import { store } from 'react-notifications-component'

export default function CreateCheckbox({ checkbox, setCheckbox }) {
  const handleQuestionChange = (e) => {
    setCheckbox({ question: e.target.value })
  }

  const handleAnswerChange = (e, a) => {
    if (a === 1) {
      setCheckbox({
        ...checkbox,
        a1: {
          order: a,
          content: e.target.value
        }
      })
    }
    if (a === 2) {
      setCheckbox({
        ...checkbox,
        a2: {
          order: a,
          content: e.target.value
        }
      })
    }
    if (a === 3) {
      setCheckbox({
        ...checkbox,
        a3: {
          order: a,
          content: e.target.value
        }
      })
    }
    if (a === 4) {
      setCheckbox({
        ...checkbox,
        a4: {
          order: a,
          content: e.target.value
        }
      })
    }
  }

  const handleSave = (e) => {
    e.preventDefault()
    axios.post("/surveys/update/checkbox/" + window.location.href.split("/").pop(), {
      checkbox: checkbox
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
    <div className="Create-Checkbox">
      <h3>Create Multiple Answer</h3>
      <p>This question type uses checkboxes to allow the user to select multiple choices at once.</p>
      <div className="center-flex">
        <div>
          <form onSubmit={handleSave}>
            <div className="question-row">
              <input type="text" className="question" placeholder="enter question" required onChange={handleQuestionChange} />
            </div>
            <div className="answer-row">
              {/* <ion-icon name="stop-outline"></ion-icon> */}
              <input type="text" className="answer" placeholder="enter first answer choice" required onChange={(e) => { handleAnswerChange(e, 1) }} />
            </div>
            <div className="answer-row">
              {/* <ion-icon name="stop-outline"></ion-icon> */}
              <input type="text" className="answer" placeholder="enter second answer choice" required onChange={(e) => { handleAnswerChange(e, 2) }} />
            </div>
            <div className="answer-row">
              {/* <ion-icon name="stop-outline"></ion-icon> */}
              <input type="text" className="answer" placeholder="enter third answer choice" required onChange={(e) => { handleAnswerChange(e, 3) }} />
            </div>
            <div className="answer-row">
              {/* <ion-icon name="stop-outline"></ion-icon> */}
              <input type="text" className="answer" placeholder="enter fourth answer choice" required onChange={(e) => { handleAnswerChange(e, 4) }} />
            </div>
            <input type="submit" value="add question" className="btn center" />
          </form>
        </div>
      </div>

    </div >
  )
}
