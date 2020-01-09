import React from "react";
import SearchBar from "./components/SearchBar";
import YouTube from "./APIs/YouTube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const KEY = "AIzaSyAGLg9gsQsV93f1msCO7fOiXLgAEm3KyCE";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await YouTube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 7,
        type: "video",
        key: KEY
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("");
  }

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
