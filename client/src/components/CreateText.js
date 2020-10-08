import React from 'react'
import axios from "axios"

export default function CreateText({text, setText}) {
  const handleQuestionChange = (e) => {
    setText({ question: e.target.value })
  }
  

  const handleSave = (e) => {
    e.preventDefault()
    axios.post("/surveys/update/text/" + window.location.href.split("/").pop(), {
      text: text
    })
      .then(res => console.log(res.data))
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Create Short Answer</h2>
      <div className="center-flex">
        <div>
          <form onSubmit={handleSave}>
            <div className="question-row">
              <span className="question-number">1.</span>
              <input type="text" id="question" name="question" placeholder="enter question text" required onChange={handleQuestionChange} /> <br /> <br />
              <input type="text" id="q2" name="q2" className="answer" placeholder="(user's answer will go here)" disabled />
            </div>           
            <input type="submit" value="save question" className="btn center" />
          </form>
        </div>
      </div>

    </div >
  )
}
