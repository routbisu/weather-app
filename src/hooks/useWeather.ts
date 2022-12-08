import { weatherApiBaseUrl } from '@/config'
import { WeatherDetails } from '@/types'
import { transformWeatherDetails } from '@/utils'
import { useState } from 'react'

export function useWeather() {
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetails | null>()
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>()

  const fetchWeatherDetails = async (location: string) => {
    // Validation for empty location
    if (!location) {
      setError('Please enter a location.')
      return
    }

    setError('')
    setIsLoading(true)
    setWeatherDetails(null)

    const weatherApiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY
    const weatherUrl = `${weatherApiBaseUrl}?APPID=${weatherApiKey}&units=metric&q=${location}`

    try {
      const response = await fetch(weatherUrl)
      const weatherDetails = await response.json()

      if (response.status === 200) {
        const weatherDetailsFormatted = transformWeatherDetails(weatherDetails)
        setWeatherDetails(weatherDetailsFormatted)
      } else if (response.status === 404) {
        // Add a more graceful message compared to the one returned from the API
        setError('Please enter a valid location.')
      } else {
        setError(weatherDetails.message)
      }
    } catch (error) {
      setError('There was an unexpected error, please try later.')
      // TODO: Log error into monitoring system
    } finally {
      setIsLoading(false)
    }
  }

  return { fetchWeatherDetails, weatherDetails, error, isLoading }
}
