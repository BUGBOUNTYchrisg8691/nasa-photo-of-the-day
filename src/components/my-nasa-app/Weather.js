import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { API_KEY } from '../../api_key';

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
const PHOTO_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"

export default function Weather(props) {
    const { weatherData } = props;
    const [locations, setLocations] = useState([])

    useEffect(() => {
        Object.keys(weatherData).forEach(loc => {
            Axios.get(`${PHOTO_URL}?sol=${loc}&api_key=${API_KEY}`).then(resp => {
                setLocations([...locations, resp.data])
            })
        })
    }, [])

    if (locations.length === 0) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            {/* { locations.map(function mapper(loc) {
                if (Array.isArray(loc)) {
                    loc.map(function mapper2(l) {
                        // return <img src={l.img_src} alt={l.rover.name} />
                    })
                }
            })} */}
            { setLocations(locations.map(function mapper(loc) {
                if (Array.isArray(loc)) {
                    return loc.map(mapper) 
                }
            }))}
            {/* {locations.forEach(loc => {
                loc.photos.forEach(element => {
                    console.log(element.img_src, element.rover.name)   
                });
            })} */}
        </div>
    )
    
    // return (
    //     locations.map(loc => {
    //         return (
    //             // <img src={ loc.url } />
    //             loc.img_src
    //         )
    //     })
    // )
}
