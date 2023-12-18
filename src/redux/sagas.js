// src/redux/sagas.js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

const YOUR_API_KEY = "64bfd2e35c3073e46500bf2681aab6e0";

function* fetchWeatherSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=${YOUR_API_KEY}`
    );
    yield put({ type: "FETCH_WEATHER_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_WEATHER_FAILURE", payload: error.message });
  }
}

function* watchFetchWeather() {
  yield takeEvery("FETCH_WEATHER_REQUEST", fetchWeatherSaga);
}

export default function* rootSaga() {
  yield watchFetchWeather();
}
