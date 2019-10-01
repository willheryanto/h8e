import React from 'react'
import {Route, useRouteMatch} from 'react-router-dom'

import Detail from '../../components/Detail'

export default () => {
  const match = useRouteMatch()

  return (
  <>
    <div>
      This is about page
    </div>

    <Route path={`${match.url}/:name`}>
      <Detail />
    </Route>
  </>
)}