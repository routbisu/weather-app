import moment from 'moment'
import { WeatherDetails } from './types'
import { iconBaseUrl } from '@/config'

export const getIconUrl = (iconId: string): string =>
  `${iconBaseUrl}${iconId}.png`

export const capitalizeFirstLetter = (input: string) =>
  input.charAt(0).toUpperCase() + input.slice(1)

export const transformWeatherDetails = (
  openWeatherApiResponse: any
): WeatherDetails | null => {
  if (openWeatherApiResponse) {
    const {
      coord: { lat, lon },
      weather,
      main,
      sys,
      name,
      visibility,
      wind,
    } = openWeatherApiResponse

    const weatherDetails: WeatherDetails = {
      location: name,
      coord: {
        lat,
        lon,
      },
      parameters: [],
    }

    // Add weather details
    if (weather?.[0]?.main) {
      const { main, description, icon } = weather[0]

      weatherDetails.parameters.push({
        name: main,
        value: capitalizeFirstLetter(description),
        iconId: icon,
      })
    }

    // Add temperature
    if (main?.temp) {
      weatherDetails.parameters.push({
        name: 'Temperature',
        value: `${main.temp} °C`,
      })
    }

    // Add sunrise time
    if (sys?.sunrise) {
      weatherDetails.parameters.push({
        name: 'Sunrise',
        value: moment.unix(sys?.sunrise).format('h:mm A'),
      })
    }

    // Add sunset time
    if (sys?.sunset) {
      weatherDetails.parameters.push({
        name: 'Sunset',
        value: moment.unix(sys?.sunset).format('h:mm A'),
      })
    }

    // Add feels like
    if (main?.feels_like) {
      weatherDetails.parameters.push({
        name: 'Feels like',
        value: `${main.feels_like} °C`,
      })
    }

    // Add humidity
    if (main?.humidity) {
      weatherDetails.parameters.push({
        name: 'Humidity',
        value: `${main.humidity} %`,
      })
    }

    // Add visibility
    if (visibility) {
      weatherDetails.parameters.push({
        name: 'Visibility',
        value: `${visibility / 1000} km`,
      })
    }

    // Add wind speed
    if (wind?.speed) {
      weatherDetails.parameters.push({
        name: 'Wind Speed',
        value: `${wind.speed} mph`,
      })
    }

    return weatherDetails
  }

  return null
}
