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

    axios.get(' http://api.giphy.com/v1/gifs/trending?api_key=JXDaYHMk25VwWeB2NhyLaPkdsp99JYCW')
    .then((resolve) => {
      this.setState({giph1: resolve.data.data})
      
    })
    .catch((err) => console.log(err));
  }

  render(){
      let elems = [];
      for(let e of this.state.giph1) {
        elems.push(<img src={e.images.downsized.url} />);
      }


      return (
        <div> 
          <form onSubmit={this.searchGiphy}>  
            <h1>Trending</h1>
            <input type="text" />
          </form>

          {elems}
        </div>
      );

  }
}

export default App;
