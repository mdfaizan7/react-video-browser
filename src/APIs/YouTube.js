import axios from "axios";

const KEY = "AIzaSyAGLg9gsQsV93f1msCO7fOiXLgAEm3KyCE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResuts: 7,
    type: "video",
    key: KEY
  }
});


// Here I have no idea why axios is not merging the params from 
// axios.create and App.js. 

// Though I have noticed that downgrading to 0.18.1 fixes this issue, 
// I have still entered the params in the App.js file
