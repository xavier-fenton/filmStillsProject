import React from 'react'

function showTitles() {
  const divElement = document.getElementById('titles')
  if (divElement.style.display === 'none') {
    divElement.style.display = 'block'
  } else {
    divElement.style.display = 'none'
  }
}
export default function ScrollList() {
  return (
    <>
      <button onClick={showTitles}>show/hide</button>
      <div id="titles">
        <img src="/images/Titles/enterthevoid.png" alt="placeholder" />
        <br></br>
        <img src="/images/Titles/blade.png" alt="placeholder" />
        <br></br>
        <img src="/images/Titles/enterthevoid.png" alt="placeholder" />
        <br></br>
        <img src="/images/Titles/midnightmaxi.png" alt="placeholder" />
        <br></br>
        <img src="/images/Titles/blade.png" alt="placeholder" />
        <br></br>
        <img src="/images/Titles/enterthevoid.png" alt="placeholder" />
        <br></br>
        <img src="/images/Titles/midnightmaxi.png" alt="placeholder" />
        <br></br>
        <img src="/images/Titles/enterthevoid.png" alt="placeholder" />
        <br></br>
        <img src="/images/Titles/blade.png" alt="placeholder" />
        <br></br>
        <img src="/images/Titles/enterthevoid.png" alt="placeholder" />
        <br></br>
        <img src="/images/Titles/midnightmaxi.png" alt="placeholder" />
        <br></br>
        <img src="/images/Titles/enterthevoid.png" alt="placeholder" />
        <br></br>
      </div>
    </>
  )
}
