import React from 'react'
import axios from "axios"

export default function CreateText({ text, setText }) {
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
              <input type="text" className="question" placeholder="enter question text" required onChange={handleQuestionChange} />
            </div>
            <div>
              <input type="text" className="answer" placeholder="(user's answer will go here)" disabled />
            </div>
            <input type="submit" value="save question" className="btn center" />
          </form>
        </div>
      </div>

    </div >
  )
}
