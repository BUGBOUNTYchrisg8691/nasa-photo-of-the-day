import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { API_KEY } from "../../api_key"
import Photos from "./Photos"

// https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0
// const WEATHER_URL = "https://api.nasa.gov/insight_weather/"
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
const PHOTO_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"

export default function Main() {
    // const [locations, setLocations] = useState([])
    const [pagePhotos, setPagePhotos] = useState([])

    // useEffect(() => {
    //     axios.get(`${WEATHER_URL}?api_key=${API_KEY}&feedtype=json&ver=1.0`).then(resp => {
    //         setLocations([...locations, Object.keys(resp.data).splice(0, 7)])
    //     })
    // }, [])

    const fetchPhotos = async (locs) => {
        const photos = []
        // console.log(locations)
        if (locs.length < 7) {
            for (let i = 0; i < locs.length; i++) {
                try {
                    const resp = await axios.get(`${PHOTO_URL}?sol=${locs[i]}&api_key=${API_KEY}`)
                    console.log(resp)
                } catch(err) {
                    debugger
                }
            }
        }
        // setPagePhotos(photos)
    }

    // if (locations.length === 0) {
    //     return (
    //         <div>
    //             Loading...
    //         </div>
    //     )
    // }

    return (
        <div>
            {/* { console.log("main", locs) } */}
            <Photos fetchPhotos={ fetchPhotos } pagePhotos={ pagePhotos } />
            {/* <Weather weatherData={ weatherData } /> */}
            {/* { obj ? console.log(Object.keys(obj).splice(0, 7)) : console.log("fetch failed") } */}
        </div>
    )
}
