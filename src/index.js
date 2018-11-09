import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const images = [
  {
    src:'http://tonsoffacts.com/wp-content/uploads/2018/01/stary-night-painting-vincent-van-gogh-starry-night-hand-painted-oil-painting-on-canvas-pictures.jpg',
    title: 'The Starry Night',
    caption: 'The Starry Night was painted by Vincent van Gogh in 1889.'
  }
]

const image = images.map(item => item)

ReactDOM.render(
  <App image={images}/>,
  document.getElementById('root')
)
