/** @jsx jsx */
import { useEffect, useState } from 'react'
import { css, jsx } from '@emotion/core'
import axios from 'axios'


export default () => {
  const [joke, setJoke] = useState(null)

  useEffect(() => {
    axios.get('https://official-joke-api.appspot.com/jokes/random')
      .then(({ data }) => {
        setJoke(data)
      })
  }, [])

  return (
    <div>
      {
        joke &&
        <div data-testid="joke" css={css`text-align: center; padding: 0 2rem`}>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
      }
      <div css={css`text-align: center;`}>
        Let's play
      </div>
    </div>
  )
}