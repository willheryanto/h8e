import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export default () => {
  const match = useRouteMatch()

  return (
    <p>about {match.params.name}</p>
  )
}