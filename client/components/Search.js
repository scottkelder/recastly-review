import React, {Component} from 'react';
import $ from 'jquery';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      response: ''
    }
  }
  updateText(data){
    this.setState({input: data})
  }
  submitText(input) {
    $.ajax({
      async: true,
      crossDomain: true,
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(this.state.input)}&maxResults=25&format=5&key=${process.env.YT_API_KEY}`,
      type: 'GET',
      headers: {
        contentType: 'application/json'
      },
      success(response) {
        let searchResults = response.items;
        searches(searchResults);
      },
      error(error) {
        console.error(error);
      }
    })
  }
  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder={'TEXT ME'} 
          onChange={event => this.updateText(event.target.value)}
        />
        <button onClick={(event) => this.submitText(this.state.input)}>SUBMIT</button>
      </div>
    )
  }
}

export default Search;