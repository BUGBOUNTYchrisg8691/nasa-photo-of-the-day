import React, { useState, useEffect } from "react"
import axios from "axios"
import { API_KEY } from "../api_key";

const URL = `https://api.nasa.gov/planetary/apod?date=2020-10-04&api_key=${API_KEY}`;

// example of api call
// https://api.nasa.gov/planetary/apod?api_key=API_KEY
// check rate limit in header under X-RateLimit-Limit and X-RateLimit-Remaining 
// Parameter 	Type 	      Default 	Description
// date	      YYYY-MM-DD	today	    The date of the APOD image to retrieve
// hd	        bool	      False	    Retrieve the URL for the high resolution image
// api_key	  string	    DEMO_KEY	api.nasa.gov key for expanded usage

export default function Photo() {
    const [potd, setPotd] = useState()

    useEffect(() => {
        axios.get(URL).then(resp => {
            console.log(resp.data)
            setPotd(resp.data)
        }).catch(err => console.log(err))
    }, [])

    if (!potd) {
        return (
            <div>
                Loading Photo of the Data
            </div>
        )
    }
    return (
        <div>
          <img className="potd" src={ potd.url } alt={ potd.title } />
        </div>
    )
}
