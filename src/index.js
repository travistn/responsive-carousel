import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const images = [
  {
    src: 'http://tonsoffacts.com/wp-content/uploads/2018/01/stary-night-painting-vincent-van-gogh-starry-night-hand-painted-oil-painting-on-canvas-pictures.jpg',
    title: 'The Starry Night',
    caption: 'The Starry Night was painted by Vincent van Gogh in 1889.'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/%27Adam%27s_Creation_Sistine_Chapel_ceiling%27_by_Michelangelo_JBU33cut.jpg/600px-%27Adam%27s_Creation_Sistine_Chapel_ceiling%27_by_Michelangelo_JBU33cut.jpg',
    title: 'The Creation of Adam',
    caption: 'The Creation of Adam was painted by Michelangelo between 1508 - 1512.'
  },
  {
    src: 'http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/61/2q/p0612qt6.jpg',
    title: 'Girl with a Pearl Earring',
    caption: 'Girl with a Pearl Earring was painted by Johannes Vermeer in 1665.'
  }
]

ReactDOM.render(
  <App image={images}/>,
  document.getElementById('root')
)
