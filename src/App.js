import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      giph1: []
    }
  }

  searchGiphy = (event) => {
    event.preventDefault();
    let userInput = event.target[0].value;
    console.log(userInput);

    axios.get('http://api.giphy.com/v1/gifs/random?api_key=JXDaYHMk25VwWeB2NhyLaPkdsp99JYCW')
    .then((resolve) => {
      this.setState({giph1: resolve.data.data.fixed_height_downsampled_url})
      console.log(resolve.data)
    })
    .catch((err) => console.log(err));
  }

  render() {
    return(
      <div>
        <img src={this.state.giph1} />
        <form onSubmit = {this.searchGiphy} >
      <h1>Random Giphy</h1>  
      <input type="text"/>
      </form>
  
      </div>
      
      );
  
  }
}

export default App;
