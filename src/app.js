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
  }
  render() {
    return(
      <Container className="d-flex justify-content-center">
        <div className="text-center">
          <h2 className="mt-5">Famous Paintings</h2>
          <div>
            <span>
              <i className="far fa-2x fa-arrow-alt-circle-left mr-2"></i>
              <img className="mt-5" src={this.props.image.map(item => item.src)} style={styles.image}></img>
              <i className="far fa-2x fa-arrow-alt-circle-right ml-2"></i>
            </span>
            <h4 className="mt-4">{this.props.image.map(item => item.title)}</h4>
            <p className="mt-3">{this.props.image.map(item => item.caption)} </p>
          </div>
        </div>
      </Container>
    )
  }
}
