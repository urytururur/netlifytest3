import React, { Component } from 'react'
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,

    }
  }

  componentDidMount() {
    fetch('https://larticlesapidotcom.000webhostapp.com/api/articles')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
          
        })
      });
  }

  render() {

    var { isLoaded, items } = this.state;
    console.log(items.data);

    if(!isLoaded) {
      return <div>Loading...</div>
    }

    else {
      return (
        <div className="App">
            
          <ul>
            {items.data.map(item => (
              <li key={item.id}>
                Id: {item.id} | Completed: {item.title}
              </li>
            ))};
          </ul>

        </div>
      );
    }
  }
}