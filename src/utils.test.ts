import {
  capitalizeFirstLetter,
  getIconUrl,
  transformWeatherDetails,
} from './utils'
import { describe, expect, it } from 'vitest'

describe('getIconUrl', () => {
  it('get icon url from icon id', () => {
    expect(getIconUrl('04d')).toBe('https://openweathermap.org/img/wn/04d.png')
  })
})

describe('capitalizeFirstLetter', () => {
  it('make first letter uppercase', () => {
    expect(capitalizeFirstLetter('partly cloudy')).toBe('Partly cloudy')
  })
})

const weatherApiResponse = {
  coord: {
    lon: -0.1257,
    lat: 51.5085,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n',
    },
  ],
  base: 'stations',
  main: {
    temp: 2.71,
    feels_like: -0.32,
    temp_min: 0.9,
    temp_max: 3.95,
    pressure: 1018,
    humidity: 86,
  },
  visibility: 10000,
  wind: {
    speed: 3.09,
    deg: 300,
  },
  clouds: {
    all: 79,
  },
  dt: 1670432241,
  sys: {
    type: 2,
    id: 2075535,
    country: 'GB',
    sunrise: 1670399496,
    sunset: 1670428351,
  },
  timezone: 0,
  id: 2643743,
  name: 'London',
  cod: 200,
}

describe.concurrent('transformWeatherDetails', () => {
  it('transform weather details - null', () => {
    expect(transformWeatherDetails(null)).toBe(null)
  })

  it('transform weather details', () => {
    expect(transformWeatherDetails(weatherApiResponse)).toStrictEqual({
      location: 'London',
      coord: { lat: 51.5085, lon: -0.1257 },
      parameters: [
        { name: 'Clouds', value: 'Broken clouds', iconId: '04n' },
        { name: 'Temperature', value: '2.71 °C' },
        { name: 'Sunrise', value: '7:51 AM' },
        { name: 'Sunset', value: '3:52 PM' },
        {
          name: 'Feels like',
          value: '-0.32 °C',
        },
        {
          name: 'Humidity',
          value: '86 %',
        },
        {
          name: 'Visibility',
          value: '10 km',
        },
        {
          name: 'Wind Speed',
          value: '3.09 mph',
        },
      ],
    })
  })
})
