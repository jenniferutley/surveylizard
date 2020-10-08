import React from 'react'
import axios from "axios"

export default function CreateRadio({ radio, setRadio }) {
  const handleQuestionChange = (e) => {
    setRadio({ question: e.target.value })
  }

  const handleAnswerChange = (e, a) => {
    if (a === 1) {
      setRadio({
        ...radio,
        a1: {
          order: a,
          content: e.target.value
        }
      })
    }
    if (a === 2) {
      setRadio({
        ...radio,
        a2: {
          order: a,
          content: e.target.value
        }
      })
    }
    if (a === 3) {
      setRadio({
        ...radio,
        a3: {
          order: a,
          content: e.target.value
        }
      })
    }
    if (a === 4) {
      setRadio({
        ...radio,
        a4: {
          order: a,
          content: e.target.value
        }
      })
    }
  }

  const handleSave = (e) => {
    e.preventDefault()
    axios.post("/surveys/update/radio/" + window.location.href.split("/").pop(), {
      radio: radio
    })
      .then(res => console.log(res.data))
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Create Single Answer</h2>
      <div className="center-flex">
        <div>
          <form onSubmit={handleSave}>
            <div className="question-row">
              <input type="text" className="question" placeholder="enter question text" required onChange={handleQuestionChange} />
            </div>
            <div className="answer-row">
              <ion-icon name="radio-button-off-outline"></ion-icon>
              <input type="text" className="answer" placeholder="enter answer text" required onChange={(e) => { handleAnswerChange(e, 1) }} />
            </div>
            <div className="answer-row">
              <ion-icon name="radio-button-off-outline"></ion-icon>
              <input type="text" className="answer" placeholder="enter answer text" required onChange={(e) => { handleAnswerChange(e, 2) }} />
            </div>
            <div className="answer-row">
              <ion-icon name="radio-button-off-outline"></ion-icon>
              <input type="text" className="answer" placeholder="enter answer text" required onChange={(e) => { handleAnswerChange(e, 3) }} />
            </div>
            <div className="answer-row">
              <ion-icon name="radio-button-off-outline"></ion-icon>
              <input type="text" className="answer" placeholder="enter answer text" required onChange={(e) => { handleAnswerChange(e, 4) }} />
            </div>
            <input type="submit" value="save question" className="btn center" />
          </form>
        </div>
      </div>

    </div >
  )
}
