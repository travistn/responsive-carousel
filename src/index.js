import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const images = [
  'http://tonsoffacts.com/wp-content/uploads/2018/01/stary-night-painting-vincent-van-gogh-starry-night-hand-painted-oil-painting-on-canvas-pictures.jpg'
]

ReactDOM.render(
  <App image={images}/>,
  document.getElementById('root')
)
