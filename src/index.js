import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Course from './course';

class App extends Component {
  render(){
    const courses = [
      { name: "Complete React.js tutorial", price: 120 },
      { name: "Complete Angular.js tutorial", price: 144 },
      { name: "Complete Es6 tutorial", price: 133 },
      { name: "Complete JAVA tutorial", price: 190 },
    ];
    return(
      <div>
        <Course items={courses}/>
      </div>
    )
  }
}


ReactDOM.render(<App /> , document.getElementById('root'));
