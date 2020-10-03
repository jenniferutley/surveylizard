import React from 'react'

export default function CreateSingleAnswer() {
  return (
    <div>
      <h2>Create Single Answer</h2>

      <div className="center-flex">
        <form>
          <div className="question-row">
            <span className="question-number">1.</span>
            <input type="text" id="question" name="question" placeholder="enter question text" required />
          </div>
          <div className="answer-row">
          <ion-icon name="radio-button-off-outline"></ion-icon>
            <input type="text" id="q1" name="q1" className="answer" placeholder="enter answer text" required />
          </div>
          <div className="answer-row">
          <ion-icon name="radio-button-off-outline"></ion-icon>
            <input type="text" id="q2" name="q2" className="answer" placeholder="enter answer text" required />
          </div>
          <div className="answer-row">
          <ion-icon name="radio-button-off-outline"></ion-icon>
            <input type="text" id="q3" name="q3" className="answer" placeholder="enter answer text" required />
          </div>
          <div className="answer-row">
          <ion-icon name="radio-button-off-outline"></ion-icon>
            <input type="text" id="q4" name="q4" className="answer" placeholder="enter answer text" required />
          </div>
          
          <input type="submit" value="add question" className="btn center"/>
        </form>
      </div>

    </div>
  )
}
