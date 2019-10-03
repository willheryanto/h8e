import React from 'react'

export default props => {
  const { value, handleClick } = props
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