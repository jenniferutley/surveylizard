import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function PreviewSurvey() {
  const [survey, setSurvey] = useState({})

  //in view, surveys is an array
  //in take, survey is an object

  useEffect(() => {
    axios.get("/surveys/" + window.location.href.split("/").pop())
      .then(res => {
        setSurvey(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

    return (
      <div className="Preview-Survey">

        {survey.radio && 
        survey.radio.map(currentRadio => 
          <div key={currentRadio._id}>
            <p>{currentRadio.question}</p>
            <input type="radio" id={currentRadio.a1[0]._id} name={currentRadio._id} />
            <label htmlFor={currentRadio.a1[0]._id}>{currentRadio.a1[0].content}</label><br />

            <input type="radio" id={currentRadio.a2[0]._id} name={currentRadio._id} />
            <label htmlFor={currentRadio.a2[0]._id}> {currentRadio.a2[0].content}</label><br />

            <input type="radio" id={currentRadio.a3[0]._id} name={currentRadio._id} />
            <label htmlFor={currentRadio.a3[0]._id}>{currentRadio.a3[0].content}</label><br />

            <input type="radio" id={currentRadio.a4[0]._id} name={currentRadio._id} />
            <label htmlFor={currentRadio.a4[0]._id}>{currentRadio.a4[0].content}</label><br />
          </div>
        )}

        {survey.checkbox && 
        survey.checkbox.map(currentCheckbox => 
          <div key={currentCheckbox._id}>
            <p>{currentCheckbox.question}</p>
            <input type="checkbox" id={currentCheckbox.a1[0]._id} name={currentCheckbox._id} />
            <label htmlFor={currentCheckbox.a1[0]._id}>{currentCheckbox.a1[0].content}</label><br />

            <input type="checkbox" id={currentCheckbox.a2[0]._id} name={currentCheckbox._id} />
            <label htmlFor={currentCheckbox.a2[0]._id}> {currentCheckbox.a2[0].content}</label><br />

            <input type="checkbox" id={currentCheckbox.a3[0]._id} name={currentCheckbox._id} />
            <label htmlFor={currentCheckbox.a3[0]._id}>{currentCheckbox.a3[0].content}</label><br />

            <input type="checkbox" id={currentCheckbox.a4[0]._id} name={currentCheckbox._id} />
            <label htmlFor={currentCheckbox.a4[0]._id}>{currentCheckbox.a4[0].content}</label><br />
          </div>
        )}

        {survey.text && 
        survey.text.map(currentText => 
          <div key={currentText._id}>
            <p>{currentText.question}</p>
            <input type="text" id={currentText._id} name={currentText._id} className="answer"  />
          </div>
        )}

      </div>

    )
  }


