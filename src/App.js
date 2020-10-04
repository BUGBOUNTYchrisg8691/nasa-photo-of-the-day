import React from "react";
import "./App.css";

import { API_KEY } from "./api_key"

const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
// example of api call
// https://api.nasa.gov/planetary/apod?api_key=API_KEY
// check rate limit in header under X-RateLimit-Limit and X-RateLimit-Remaining 
// Parameter 	Type 	      Default 	Description
// date	      YYYY-MM-DD	today	    The date of the APOD image to retrieve
// hd	        bool	      False	    Retrieve the URL for the high resolution image
// api_key	  string	    DEMO_KEY	api.nasa.gov key for expanded usage

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        { console.log(URL, API_KEY) }
      </p>
    </div>
  );
}

export default App;
