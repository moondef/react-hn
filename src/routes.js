import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ContentList } from './features/content-list'
import { ContentItem } from './features/content-item'
import { UserProfile } from './features/user-profile'
import { NotFoundPage } from './features/not-found'

// const pages = ['top', 'newest', 'show', 'ask', 'jobs']
const TopPage = () => <ContentList page="news" />
const NewPage = () => <ContentList page="newest" />
const ShowPage = () => <ContentList page="show" />
const AskPage = () => <ContentList page="ask" />
const JobsPage = () => <ContentList page="jobs" />

export const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={TopPage} />
      <Route path="/top" component={TopPage} />
      <Route path="/newest" component={NewPage} />
      <Route path="/show" component={ShowPage} />
      <Route path="/ask" component={AskPage} />
      <Route path="/jobs" component={JobsPage} />

      <Route path="/item/:id" component={ContentItem} />
      <Route path="/user/:id" component={UserProfile} />

      <Route path="*" component={NotFoundPage} />
    </Switch>
  </>
)
