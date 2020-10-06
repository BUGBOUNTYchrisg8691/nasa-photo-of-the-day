import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { API_KEY } from "../../api_key"
import Weather from "./Weather"

// https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0
const WEATHER_URL = "https://api.nasa.gov/insight_weather/"

export default function Main() {
    const [weatherData, setWeatherData] = useState("")

    useEffect(() => {
        Axios.get(`${WEATHER_URL}?api_key=${API_KEY}&feedtype=json&ver=1.0`).then(resp => {
            setWeatherData(resp.data)
        })
    }, [])
    
    if (weatherData === "") {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <Weather weatherData={ weatherData } />
            {/* { obj ? console.log(Object.keys(obj).splice(0, 7)) : console.log("fetch failed") } */}
        </div>
    )
}
