import React, { useState } from 'react'

const data = [
  {
    id: '1',
    title: 'Enter',
    img: 'enter.jpg',
  },
  {
    id: '2',
    title: 'Park',
    img: 'park.jpg',
  },
  {
    id: '3',
    title: 'Room',
    img: 'room.jpg',
  },
]

//pass these data values as props in App.jsx
export default function ChangeImageButton() {
  const [toggle, setToggle] = useState('1')
  return (
    <div className="next">
      {data.map(({ id, title, img }) => {
        return <button onClick={() => setToggle(id)}>next</button>
      })}
    </div>
  )
}
