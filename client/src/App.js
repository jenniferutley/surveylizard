import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import ReactNotification from 'react-notifications-component'
import './toast.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import CreateSurvey from './components/CreateSurvey'
import PreviewSurvey from './components/PreviewSurvey'
import ViewSurveys from './components/ViewSurveys'
import TakeSurvey from './components/TakeSurvey'
import EditSurvey from './components/EditSurvey'

function App() {
  return (
    <BrowserRouter>
    <ReactNotification />
      <Nav />
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Hero} />
      <Route path={process.env.PUBLIC_URL + '/viewsurveys'} component={ViewSurveys} />
      <Route path={process.env.PUBLIC_URL + '/createsurvey'} component={CreateSurvey} />
      <Route path={process.env.PUBLIC_URL + '/previewsurvey'} component={PreviewSurvey} />
      <Route path={process.env.PUBLIC_URL + '/takesurvey'} component={TakeSurvey} />
      <Route path={process.env.PUBLIC_URL + '/editsurvey'} component={EditSurvey} />
    </BrowserRouter>
  );
}

export default App;


