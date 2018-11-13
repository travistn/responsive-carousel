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
  },
  {
    src: 'https://www.paintingmania.com/arts/george-seurat/large/sunday-afternoon-island-la-grande-jatte-123_2780.jpg?version=11.09.28',
    title: 'A Sunday Afternoon on the Island of La Grande Jatte',
    caption: 'A Sunday Afternoon on the Island of La Grande Jatte was painted by Georges Seurat in 1884.'
  },
  {
    src: 'https://thumbs-prod.si-cdn.com/dRPLYz_rZM7BKezMum2Zxro6XbI=/800x600/filters:no_upscale():focal(276x253:277x254)/https://public-media.smithsonianmag.com/filer/19/08/19082b9b-932c-4f8e-9ff6-5f3f2353a6e9/mona_lisa.jpg',
    title: 'The Mona Lisa',
    caption: 'The Mona Lisa was painted by Leonardo da Vinci in 1503.'

  }
]

ReactDOM.render(
  <App image={images}/>,
  document.getElementById('root')
)
