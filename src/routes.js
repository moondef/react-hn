import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { HomePage } from './features/home'
import { NotFoundPage } from './features/not-found'

export const Routes = () => (
  <>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </>
)
