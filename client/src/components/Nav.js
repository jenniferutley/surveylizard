import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="Nav" id="Nav">
      <nav>
        <Link to={process.env.PUBLIC_URL + '/'} >Home</Link>
        {/* <Link to={process.env.PUBLIC_URL + '/takesurvey'}>Take Survey</Link> */}
        <Link to={process.env.PUBLIC_URL + '/viewsurveys'}>Manage</Link>        
        <Link to={process.env.PUBLIC_URL + '/createsurvey'}>Create</Link>
      </nav>
    </div>
  )
}
