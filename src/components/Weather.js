// src/components/Weather.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Weather = () => {
  const [city, setCity] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const weatherData = useSelector((state) => state.weather.data);
  const weatherLoading = useSelector((state) => state.weather.loading);
  const weatherError = useSelector((state) => state.weather.error);
  const dispatch = useDispatch();

  const handleFetchWeather = () => {
    dispatch({ type: "FETCH_WEATHER_REQUEST", payload: city });
    setIsEditing(false); // Hide weather data when fetching new data
  };

  return (
    <div className="mt-8">
      <div className="flex mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setIsEditing(true);
          }}
          className="p-2 border border-gray-300 mr-2 focus:outline-none"
        />
        <button
          onClick={handleFetchWeather}
          disabled={weatherLoading}
          className="bg-blue-500 text-white p-2 disabled:opacity-50"
        >
          {weatherLoading ? "Fetching..." : "Fetch Weather"}
        </button>
      </div>
      {isEditing ? null : (
        <>
          {weatherData && (
            <div className="bg-green-100 p-4 rounded-md mb-4">
              <h3 className="text-xl font-bold mb-2">{weatherData.name}</h3>
              <p>Temperature: {weatherData.main.temp} K</p>
              <p>Weather: {weatherData.weather[0].description}</p>
            </div>
          )}
          {weatherError && <p className="text-red-500">{weatherError}</p>}
        </>
      )}
    </div>
  );
};

export default Weather;
