import React from 'react'
import axios from "axios"

export default function CreateRadio({ radio, setRadio }) {
  let answerArray = []

  const handleQuestionChange = (e) => {
    setRadio({ question: e.target.value })
  }

  const handleAnswerChange = (e) => {
    answerArray.push(e.target.value)
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.log(answerArray)
    const obj = Object.assign({}, answerArray);
    setRadio({
      ...radio,
      answers: {
        ...radio.answers,
        content: {obj}
      }
    })
    axios.post("/surveys/update/"+window.location.href.split("/").pop(), {
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
              <span className="question-number">1.</span>
              <input type="text" id="question" name="question" placeholder="enter question text" onChange={handleQuestionChange} />
            </div>
            <div className="answer-row">
              <ion-icon name="radio-button-off-outline"></ion-icon>
              <input type="text" id="q1" name="q1" className="answer" placeholder="enter answer text" onChange={handleAnswerChange}/>
            </div>
            <div className="answer-row">
              <ion-icon name="radio-button-off-outline"></ion-icon>
              <input type="text" id="q2" name="q2" className="answer" placeholder="enter answer text" onChange={handleAnswerChange} />
            </div>
            <div className="answer-row">
              <ion-icon name="radio-button-off-outline"></ion-icon>
              <input type="text" id="q3" name="q3" className="answer" placeholder="enter answer text" onChange={handleAnswerChange} />
            </div>
            <div className="answer-row">
              <ion-icon name="radio-button-off-outline"></ion-icon>
              <input type="text" id="q4" name="q4" className="answer" placeholder="enter answer text" onChange={handleAnswerChange} />
            </div>
            <input type="submit" value="save question" className="btn center" />
          </form>
        </div>
      </div>

    </div >
  )
}
