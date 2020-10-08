import React from 'react'
import axios from "axios"

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
      .then(res => console.log(res.data))
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Create Multiple Answer</h2>
      <div className="center-flex">
        <div>
          <form onSubmit={handleSave}>
            <div className="question-row">
              <span className="question-number">1.</span>
              <input type="text" id="question" name="question" placeholder="enter question text" required onChange={handleQuestionChange} />
            </div>
            <div className="answer-row">
              <ion-icon name="stop-outline"></ion-icon>
              <input type="text" id="1" name="1" className="answer" placeholder="enter answer text" required onChange={(e) => { handleAnswerChange(e, 1) }} />
            </div>
            <div className="answer-row">
              <ion-icon name="stop-outline"></ion-icon>
              <input type="text" id="q2" name="q2" className="answer" placeholder="enter answer text" required onChange={(e) => { handleAnswerChange(e, 2) }} />
            </div>
            <div className="answer-row">
              <ion-icon name="stop-outline"></ion-icon>
              <input type="text" id="q3" name="q3" className="answer" placeholder="enter answer text" required onChange={(e) => { handleAnswerChange(e, 3) }} />
            </div>
            <div className="answer-row">
              <ion-icon name="stop-outline"></ion-icon>
              <input type="text" id="q4" name="q4" className="answer" placeholder="enter answer text" required onChange={(e) => { handleAnswerChange(e, 4) }} />
            </div>
            <input type="submit" value="save question" className="btn center" />
          </form>
        </div>
      </div>

    </div >
  )
}
