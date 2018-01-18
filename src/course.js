import React, { Component } from 'react';
import Book from './book';
import './style.css';

class Course extends Component {
 
  constructor(props){
   super(props);
   
   this.state = {
     total : 0
   }
   this.sum = this.sum.bind(this)
 }
  sum(price) {
    this.setState({ total: this.state.total+price })
  }
  render(){
   
    let bok = this.props.items.map((item, i) => {
      return <Book key={i} name={item.name} price={item.price} 
      sum={this.sum} active={item.active}/>
    })
   
    return(
      <div>
      <h1>Your Courses are:</h1>
        <div className="Course">
          {bok}
        </div>
        <div className="total">
          <p>TOTAL: {this.state.total}</p>
        </div>
      </div>
    )
  }
}

export default Course;