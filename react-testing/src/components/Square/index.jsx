import React from 'react'

export default React.memo(props => {
  const { value, handleClick, index } = props
  return (
    <button
      className="square"
      style={{ color: value === 'X' ? 'blue' : 'red' }}
      onClick={value ? null : handleClick(index)}
      aria-label="square-button"
    >
      {value}
    </button>
  );
})