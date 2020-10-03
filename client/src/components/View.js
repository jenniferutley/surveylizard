import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import moment from 'moment'

export default function View() {
  const [surveys, setSurveys] = useState([])

  useEffect(() => {
    axios.get("/surveys")
      .then(res => {
        console.log(res.data)
        setSurveys(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete("surveys/"+id)
    .then(response => {console.log(response.data)})

    setSurveys(
      surveys.filter(el => el._id !== id)
    )
  }

  return (
    <div className="View">
      <h2>View Surveys</h2>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date Created</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((currentSurvey) => <tr key={currentSurvey._id}>
            <td>{currentSurvey.name}</td>
            <td>{currentSurvey.description}</td>
            <td>{moment(currentSurvey.createdAt).format("L LTS")}</td>
            <td>{moment(currentSurvey.updatedAt).format("L LTS")}</td>
            <td><Link to={process.env.PUBLIC_URL + '/edit/'+currentSurvey._id}><button>Edit</button></Link></td>
            <td><button onClick={() => {handleDelete(currentSurvey._id)}}>Delete</button></td>            
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
