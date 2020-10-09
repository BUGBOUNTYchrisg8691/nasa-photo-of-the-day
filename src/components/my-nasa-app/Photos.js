import userEvent from '@testing-library/user-event';
import React, { useState, useEffect, useRef } from 'react'
// import axios from "axios"
// import { API_KEY } from '../../api_key';

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// const PHOTO_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"

export default function Weather(props) {
    const { pagePhotos, fetchPhotos } = props;
    const inputRef = useRef()
    
    return (
        <div>
            {/* { console.log(photos) } */}
            {/* { console.log(API_KEY)} */}
            <input ref={ inputRef } type="text" ></input>
            <button onClick={ fetchPhotos }>Get Photos</button>
            <button onClick={ pagePhotos.length > 0 ? console.log(pagePhotos) : console.log("No photos") }>Show</button>
        </div>
    )
}
