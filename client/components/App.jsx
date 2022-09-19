import React from 'react'

//have an image source which is dynamic
//want to make a function for when i click it changes to the next image
//maybe something where if it matchs the strings go to the next available string?
//or if clicked is the same then go to the next

// const images = [
//   {
//     id: 'images/tak1.jpg',
//   },
//   {
//     id2: 'images/tak2.jpg',
//   },
// ]

// function changeSrc() {
//   if (images.id === images.id) {
//     return images.id2
//   }
// }

// function handleClick() {
//   changeSrc()
// }

let image = new Array('images/tak1.jpg', 'images/tak2.jpg')
console.log(image)

let imgNumber = 1

let numberOfImg = image.length

function previousImage() {
  if (imgNumber > 1) {
    imgNumber--
  } else {
    imgNumber = numberOfImg
  }

  document.slideImage.src = image[imgNumber - 1]
}

function nextImage() {
  if (imgNumber < numberOfImg) {
    imgNumber++
  } else {
    imgNumber = 1
  }

  document.slideImage.src = image[imgNumber - 1]
}

const App = () => {
  return images.map((image) => {
    return (
      <div className="imgbox" key={1}>
        <img
          key={4}
          className="center-fit"
          src={`${image.id}`}
          alt="word"
          onClick={handleClick}
        />
      </div>
    )
  })
}

export default App
