import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videoList: null,
      currentVideo: null
    }
  }
  entryClick(target) {
    this.setState({currentVideo: target});
  }
  render() {
    return(
      <div>
        <Search />
        <VideoPlayer 
          video={this.state.currentVideo}
          videos={this.state.videoList}
        />
        <VideoList 
          videos={this.state.videoList}
          entryClick={this.entryClick.bind(this)}
        />
      </div>
    )
  }
}
export default App;