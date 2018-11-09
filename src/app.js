import React from 'react'
import { Container } from 'reactstrap'

const styles = {
  image: {
    width: '500px',
    height: '250px'
  }
}

const images = [
  {
    src: 'http://tonsoffacts.com/wp-content/uploads/2018/01/stary-night-painting-vincent-van-gogh-starry-night-hand-painted-oil-painting-on-canvas-pictures.jpg',
    title: 'The Starry Night',
    caption: 'The Starry Night was painted by Vincent van Gogh in 1889.'
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  render() {
    return(
      <Container className="d-flex justify-content-center">
        <div className="text-center">
          <h2 className="mt-5">Responsive Carousel</h2>
          <img className="mt-5" src={this.props.image} style={styles.image}></img>
          <h4 className="mt-4">The Starry Night</h4>
          <p className="mt-3">The Starry Night was painted by Vincent van Gogh in 1889. </p>
        </div>
      </Container>
    )
  }
}
