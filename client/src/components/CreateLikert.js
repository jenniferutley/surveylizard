import React from 'react'
import axios from "axios"
import  { store } from 'react-notifications-component'

export default function CreateLikert({ likert, setLikert }) {
  const handleQuestionChange = (e) => {
    setLikert({ question: e.target.value })
  }
  
  const handleSave = (e) => {
    e.preventDefault()
    axios.post("/surveys/update/likert/" + window.location.href.split("/").pop(), {
      likert: likert
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
    <div className="Create-Likert">
      <h3 className="create-title">Likert</h3>
      <p className="create-instructions">This question type provides the user with a slider to select where their response lies on a five-point scale.</p>
      <div className="center-flex">
        <div>
          <form onSubmit={handleSave}>
            <div className="question-row">
              <input type="text" className="question" placeholder="enter question" required onChange={handleQuestionChange} />
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
            <input type="submit" value="add question" className="btn center" />
          </form>
        </div>
      </div>

    </div >
  )
}
