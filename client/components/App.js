import React from 'react';
import Search from './Search.js';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videoList: [
        {
          title: 'title1',
          description: 'description',
          image: 'https://i.imgur.com/LulPH2z.jpg'
        },
        {
          title: 'title2',
          description: 'description2',
          image: 'https://i.imgur.com/JbLp4mO.jpg'

        },
        {
          title: 'title3',
          description: 'description3',
          image: 'https://i.imgur.com/t2Q3S0u.jpg'
        }
      ],
      currentVideo: {
        title: 'title',
        description: 'description',
        image: 'https://i.imgur.com/LulPH2z.jpg'
      }
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