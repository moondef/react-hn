import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// import { injectGlobal } from 'styled-components'

import { Routes } from './routes'
// import { globalStyles } from './ui/theme'

// injectGlobal(globalStyles)

const App = () => (
  <Router>
    <Routes />
  </Router>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
