/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import Board from '../../components/Board'

export default () => {
  return (
    <div className="game" css={css`display: flex; flex-direction: column;`}>
      <div className="game-board" >
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}