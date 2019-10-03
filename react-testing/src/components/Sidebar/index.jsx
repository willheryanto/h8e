/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div css={css`
      border-right: solid; 
      height: 100vh;
      text-align: center;
      padding-top: 20px
    `}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/game">Game</Link>
      </div>
    </div>
  )
}