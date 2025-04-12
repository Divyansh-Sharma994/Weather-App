
import React from 'react';

function WeatherCard({ data }) {
    return (
        <div className="weather-card">
            <h2>{data.condition}</h2>
            <img src={data.icon} alt={data.condition} />
            <p>Temperature: {data.temperature}°C</p>
            <p>Humidity: {data.humidity}%</p>
            <p>Wind Speed: {data.windSpeed} m/s</p>
        </div>
    );
}

export default WeatherCard;
