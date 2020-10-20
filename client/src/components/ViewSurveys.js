import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import moment from 'moment'
import  { store } from 'react-notifications-component'

export default function ViewSurveys() {
  const [surveys, setSurveys] = useState([])

  useEffect(() => {
    axios.get("/surveys")
      .then(res => {
        setSurveys(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete("surveys/"+id)
    .then(res => {
      // console.log(res.data)
      store.addNotification({
        message: "Survey deleted.",
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

    setSurveys(
      surveys.filter(el => el._id !== id)
    )
  }

  return (
    <div className="View-Surveys">
      <h2>Manage Surveys</h2>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date Created</th>
            <th>Last Modified</th>
            <th> </th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((currentSurvey) => <tr key={currentSurvey._id}>
            <td>{currentSurvey.name}</td>
            <td>{currentSurvey.description}</td>
            <td>{moment(currentSurvey.createdAt).format("L LTS")}</td>
            <td>{moment(currentSurvey.updatedAt).format("L LTS")}</td>
            <td><Link to={process.env.PUBLIC_URL + '/previewsurvey/'+currentSurvey._id}><button className="table-button">Preview</button></Link></td>
            {/* <td><Link to={process.env.PUBLIC_URL + '/takesurvey/'+currentSurvey._id}><button className="table-button">Take</button></Link></td> */}
            <td><Link to={process.env.PUBLIC_URL + '/editsurvey/'+currentSurvey._id}><button className="table-button">Edit</button></Link></td>
            <td><button className="table-button" onClick={() => {handleDelete(currentSurvey._id)}}>Delete</button></td>            
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
