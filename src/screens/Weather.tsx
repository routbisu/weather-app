import styled from 'styled-components'
import Message from '@/components/Message'
import TextInputControl from '@/components/TextInputControl'
import { MessageType } from '@/enums'
import Tile from '@/components/Tile'
import Location from '@/components/Location'
import { useWeather } from '@/hooks/useWeather'
import { useEffect, useState } from 'react'

const WeatherWrapper = styled.main`
  margin: auto;
  max-width: ${({ theme }) => theme.size[128]};
  padding: ${({ theme }) => theme.space[4]};
`

const WeatherTiles = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[4]};

  @media screen and (min-width: 376px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const PageHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[4]};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[5]};
`

const Weather = () => {
  const [location, setLocation] = useState<string>('')
  const { error, weatherDetails, fetchWeatherDetails, isLoading } = useWeather()

  useEffect(() => {
    if (weatherDetails && !Boolean(error)) {
      setLocation('')
    }
  }, [error, weatherDetails])

  const handleFetchWeather = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    fetchWeatherDetails(location)
  }

  return (
    <WeatherWrapper>
      <PageHeading>Weather App</PageHeading>
      {weatherDetails ? null : (
        <Message type={MessageType.Info}>
          Enter a location to get current weather details.
        </Message>
      )}

      <form onSubmit={handleFetchWeather}>
        <TextInputControl
          name="location"
          label="Location"
          buttonTitle="Fetch weather details"
          placeholder="Enter location"
          value={location}
          isLoading={isLoading}
          isErrored={Boolean(error)}
          onChange={(evt) => setLocation(evt.target.value)}
        />
      </form>

      {error ? <Message type={MessageType.Error}>{error}</Message> : null}
      {weatherDetails?.location ? (
        <Location name={weatherDetails.location} />
      ) : null}
      {weatherDetails?.parameters ? (
        <WeatherTiles>
          {weatherDetails.parameters.map(({ name, value, iconId }) => (
            <Tile
              key={name}
              paramName={name}
              paramValue={value}
              iconId={iconId}
            />
          ))}
        </WeatherTiles>
      ) : null}
    </WeatherWrapper>
  )
}

export default Weather
