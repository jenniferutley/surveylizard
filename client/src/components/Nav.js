import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="Nav">
      <nav>
        <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
        <Link to={process.env.PUBLIC_URL + '/takesurvey'}>Take Survey</Link>
        <Link to={process.env.PUBLIC_URL + '/viewsurveys'}>View Surveys</Link>        
        <Link to={process.env.PUBLIC_URL + '/createsurvey'}>Create Survey</Link>
      </nav>
    </div>
  )
}
