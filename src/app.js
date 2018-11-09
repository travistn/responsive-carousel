import React from 'react'
import { Container } from 'reactstrap'

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
  moveImage() {
    const index = this.state.currentIndex
    const { image } = this.props
    if (index !== image.length - 1) {
      this.setState({
        currentIndex: index + 1
      })
    }
    if (index === image.length - 1) {
      this.setState({
        currentIndex: 0
      })
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
              <i className="far fa-arrow-alt-circle-left fa-2x mr-2 arrow"
                onClick={() => this.handleClick('left')}></i>
              <img className="mt-5 img" src={images[currentIndex].src}></img>
              <i className="far fa-arrow-alt-circle-right fa-2x ml-2 arrow"
                onClick={() => this.handleClick('right')}></i>
            </span>
            <div>
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
            <h4 className="mt-3">{images[currentIndex].title}</h4>
            <p className="mt-3">{images[currentIndex].caption} </p>
          </div>
        </div>
      </Container>
    )
  }
}
