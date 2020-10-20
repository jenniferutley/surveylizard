import React from 'react'
import {Link} from "react-router-dom"
import BackgroundImage from "../media/background.jpg"

export default function Hero() {
  
  return (
    <div className="Hero">
      <h1>survey lizard.</h1>
      <Link to={process.env.PUBLIC_URL + '/createsurvey'}><button className="rounded center">Get Started</button></Link>
    </div>
  )
}
