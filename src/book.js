import React, { Component } from 'react';

class Book extends Component {

  constructor(props){
    super(props);
    this.state = {
        active : false
    }
    this.clicker = this.clicker.bind(this);
  }
  clicker() {
    let active = !this.state.active
    this.setState({
      active
    });
    this.props.sum(active ? this.props.price : -this.props.price);
  }
  render() {

    return (
      <div>
        <p onClick={this.clicker}>{this.props.name} <strong>{this.props.price}</strong></p>

      </div>
    )
  }
}

export default Book;