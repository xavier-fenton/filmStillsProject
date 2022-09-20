import React from 'react'

function handleClick() {
  console.log('hit')
}
export default function Images() {
  return (
    <>
      <img className="overflow" src="/images/tak.jpg" alt="tak"></img>
      <div className="nextButton">
        <button className="next" onClick={handleClick}>
          next
        </button>
      </div>
    </>
  )
}
