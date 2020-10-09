import React, { useState, useEffect } from "react"
import axios from "axios"
import { API_KEY } from "../api_key";
import DateDropdown from "./DateDropdown";
import styled from "styled-components"

const URL = `https://api.nasa.gov/planetary/apod?date=2020-10-04&api_key=${API_KEY}`;

const BASE_URL = "https://api.nasa.gov/planetary/apod"
// example of api call
// https://api.nasa.gov/planetary/apod?api_key=API_KEY
// check rate limit in header under X-RateLimit-Limit and X-RateLimit-Remaining 
// Parameter 	Type 	      Default 	Description
// date	      YYYY-MM-DD	today	    The date of the APOD image to retrieve
// hd	        bool	      False	    Retrieve the URL for the high resolution image
// api_key	  string	    DEMO_KEY	api.nasa.gov key for expanded usage

const Img = styled.img`
    &:hover {
    transform: scale(1.1) rotateX(360deg);
    transition-duration: 1s;
}
`

const H3 = styled.h3`
    margin: 10px;
`

export default function Photo() {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [potd, setPotd] = useState()

    const style = {
        borderRadius: "50%",
        width: "40%",
        margin: "30px"
    }

    const divStyle = {
        margin: "10px"
    }

    useEffect(() => {
        axios.get(`${BASE_URL}?date=${date}&api_key=${API_KEY}`).then(resp => {
            setPotd(resp.data)
        }).catch(err => console.log(err))
    }, [date])

    const changePhoto = (newDate) => {
        setDate(newDate)
    }

    if (!potd) {
        return (
            <div style={ divStyle }>
                Loading Photo of the Data
            </div>
        )
    }
    return (
        <div style={ divStyle }>
          <DateDropdown changePhoto={ changePhoto } />
          <H3>{ potd.title }</H3>
          <Img style={ style } className="potd" src={ potd.url } alt={ potd.title } />
        </div>
    )
}
