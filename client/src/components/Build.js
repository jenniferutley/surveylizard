import React, { useState } from 'react'
import CreateSingleAnswer from "./CreateSingleAnswer"
import CreateMultipleAnswer from "./CreateMultipleAnswer"

export default function Build() {
  const [showSingleAnswer, setShowSingleAnswer] = useState(true)
  const [showMultipleAnswer, setShowMultipleAnswer] = useState(false)

  const handleSingleAnswer = (e) => {
    setShowSingleAnswer(!showSingleAnswer)    
  }

  const handleMultipleAnswer = (e) => {
    setShowMultipleAnswer(!showMultipleAnswer)    
  }

  return (
    <div className="Build">
      <h2>Build Survey</h2>
      <div className="button-group center-flex">
        <button className="button-group-start" title="add single answer item"onClick={handleSingleAnswer}><ion-icon name="list-outline"></ion-icon></button>
        <button className="button-group-middle" title="add multiple answer item" onClick={handleMultipleAnswer}><ion-icon name="checkbox-outline"></ion-icon></button>
        <button className="button-group-middle" title="add short text item"><ion-icon name="reorder-two-outline"></ion-icon></button>
        <button className="button-group-middle" title="add long text item"><ion-icon name="reorder-four-outline"></ion-icon></button>
        <button className="button-group-end" title="add Likert scale"><ion-icon name="options-outline"></ion-icon></button>
      </div>
      {showSingleAnswer && <CreateSingleAnswer />}
      {showMultipleAnswer && <CreateMultipleAnswer />}
    </div>
  )
}
