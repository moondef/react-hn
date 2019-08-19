import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import * as serviceWorker from './serviceWorker'

import { Routes } from './routes'

import './index.css'

const App = () => (
  <Router>
    <Helmet>
      <title>React HN</title>
    </Helmet>
    <Routes />
  </Router>
)

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)

serviceWorker.register()
