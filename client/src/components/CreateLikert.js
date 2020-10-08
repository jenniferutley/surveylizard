import React from 'react'
import axios from "axios"

export default function CreateLikert({ likert, setLikert }) {
  const handleQuestionChange = (e) => {
    setLikert({ question: e.target.value })
  }
  
  const handleSave = (e) => {
    e.preventDefault()
    axios.post("/surveys/update/likert/" + window.location.href.split("/").pop(), {
      likert: likert
    })
      .then(res => console.log(res.data))
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Create Likert</h2>
      <div className="center-flex">
        <div>
          <form onSubmit={handleSave}>
            <div className="question-row">
              <input type="text" className="question" placeholder="enter question text" required onChange={handleQuestionChange} />
            </div>
            <div>
              <div className="range-flex">
                <span className="input-label">Strongly<br />Disagree</span>
                <span className="input-label">Disagree</span>
                <span className="input-label">Neutral</span>
                <span className="input-label">Agree</span>
                <span className="input-label">Strongly<br />Agree</span>
              </div>
              <input type="range" name="rangeInput" min="1" max="5" disabled/>
            </div>
            <input type="submit" value="save question" className="btn center" />
          </form>
        </div>
      </div>

    </div >
  )
}
