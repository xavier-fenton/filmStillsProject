import React from 'react'

// function handles showing/hiding titles
function showTitles() {
  const divElement = document.getElementById('titles')
  if (divElement.style.display === 'none') {
    divElement.style.display = 'block'
  } else {
    divElement.style.display = 'none'
  }
}
export default function BottomNav() {
  const buttonElement = (
    <button className="buttonPosition" onClick={showTitles}>
      show/hide
    </button>
  )

  return (
    <div>
      <div className="bottomNav">{buttonElement}</div>
    </div>
  )
}
