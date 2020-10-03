import React, { useState, useEffect }  from 'react'
import axios from "axios"

export default function Edit() {
  const [surveys, setSurveys] = useState([])

  useEffect(() => {
    axios.get("/surveys/"+window.location.href.split("/").pop())
      .then(res => {
        setSurveys(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="Edit">
    <h2>Survey {surveys.name}</h2>
    <p>{surveys.description}</p>      
    <p>{JSON.stringify(surveys.items)}</p>    
    </div>
  )
}
