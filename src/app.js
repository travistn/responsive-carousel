import React from 'react'
import { Container } from 'reactstrap'

const styles = {
  image: {
    width: '250px',
    height: '150px'
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(direction) {
    const { image } = this.props
    const index = this.state.currentIndex
    switch (direction) {
      case 'left':
        if (index === 0) {
          this.setState({
            currentIndex: image.length - 1
          })
        }
        else {
          this.setState({
            currentIndex: index - 1
          })
        }
        break
      case 'right':
        if (index === image.length - 1) {
          this.setState({
            currentIndex: 0
          })
        }
        else {
          this.setState({
            currentIndex: index + 1
          })
        }
    }
  }
  render() {
    const currentIndex = this.state.currentIndex
    const { image } = this.props
    const images = image.map(item => item)
    return(
      <Container className="d-flex justify-content-center">
        <div className="text-center">
          <h2 className="mt-5">Famous Paintings</h2>
          <div>
            <span>
              <i className="far fa-2x fa-arrow-alt-circle-left mr-2"
                onClick={() => this.handleClick('left')}></i>
              <img className="mt-5" src={images[currentIndex].src} style={styles.image}></img>
              <i className="far fa-2x fa-arrow-alt-circle-right ml-2"
                onClick={() => this.handleClick('right')}></i>
            </span>
            <div className="text-center">
              <span>
                {
                  image.map((item, index) =>
                    <i
                      key={item.src}
                      className="far fa-circle circle"
                      style={(currentIndex === index)
                        ? {background: 'black'}
                        : {background: 'none'}}></i>
                  )
                }
              </span>
            </div>
            <h4 className="mt-4">{images[currentIndex].title}</h4>
            <p className="mt-3">{images[currentIndex].caption} </p>
          </div>
        </div>
      </Container>
    )
  }
}
