import React from 'react'
import './App.css'


class Square extends React.Component {
  render() {
    const { value, handleClick } = this.props
    return (
      <button
        className="square"
        style={{ color: value === 'X' ? 'blue' : 'red' }}
        onClick={value ? null : handleClick}
      >
        {value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      turn: 'X'
    }
  }

  handleClick = i => {
    this.setState(state => ({
      squares: [
        ...state.squares.slice(0, i),
        state.turn,
        ...state.squares.slice(i + 1)
      ],
      turn: state.turn === 'X' ? 'O' : 'X'
    }))
  }

  render() {
    const status = 'Next player: ' + this.state.turn;

    return (
      <div>
        <div className="status">{status}</div>
        {[0, 1, 2].map(row => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((p) => {
              const i = row * 3 + p
              return (
                <Square
                  key={i}
                  value={this.state.squares[i]}
                  handleClick={() => this.handleClick(i)}
                />
              )
            })}
          </div>
        ))}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      started: false
    }
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          {
            this.state.started
              ? <Board />
              : <button onClick={() => this.setState({ started: true })}>
                  Start
                </button>
          }
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game