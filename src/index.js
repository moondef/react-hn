import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { Routes } from './routes'

import './index.css'

const App = () => (
  <Router>
    <Routes />
  </Router>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
