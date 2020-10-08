import React from 'react'
import axios from "axios"

export default function CreateTextArea({ textArea, setTextArea }) {
  const handleQuestionChange = (e) => {
    setTextArea({ question: e.target.value })
  }

  const handleSave = (e) => {
    e.preventDefault()
    axios.post("/surveys/update/textarea/" + window.location.href.split("/").pop(), {
      textArea: textArea
    })
      .then(res => console.log(res.data))
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Create Long Text</h2>
      <div className="center-flex">
        <div>
          <form onSubmit={handleSave}>
            <div className="question-row">
              <input type="text" className="question" placeholder="enter question text" required onChange={handleQuestionChange} />
            </div>
            <div>
              <textarea rows="4" cols="40" placeholder="(user's answer will go here)" disabled />
            </div>
            <input type="submit" value="save question" className="btn center" />
          </form>
        </div>
      </div>

    </div >
  )
}
