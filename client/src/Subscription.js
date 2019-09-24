import React from 'react'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const Subscription = () => {
  const { data } = useSubscription(gql`
    subscription {
      angka
    }
  `)

  console.log(data)
  return <div>{JSON.stringify(data)}</div>
}

export default Subscription