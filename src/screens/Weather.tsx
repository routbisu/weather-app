import styled from 'styled-components'
import Message from '@/components/Message'
import TextInputControl, { HiddenLabel } from '@/components/TextInputControl'
import { MessageType } from '@/enums'
import Tile from '@/components/Tile'
import Location from '@/components/Location'
import { useWeather } from '@/hooks/useWeather'
import { useEffect, useState } from 'react'
import { getFromLocalstorage, saveToLocalstorage } from '@/utils'

const WeatherHeader = styled.header`
  margin: auto;
  max-width: ${({ theme }) => theme.size[128]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[5]};
`

const WeatherMain = styled.main`
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
  font-size: ${({ theme }) => theme.fontSize[2]};
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 3px dashed ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.space[3]} 0px;
`

const Select = styled.select`
  font-size: ${({ theme }) => theme.fontSize[1]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.space[1]};
`

const Weather = () => {
  const [location, setLocation] = useState<string>('')
  const [unit, setUnit] = useState<string>(
    getFromLocalstorage('unit') || 'metric'
  )
  const { error, weatherDetails, fetchWeatherDetails, isLoading } = useWeather()

  useEffect(() => {
    if (weatherDetails && !Boolean(error)) {
      setLocation('')
    }
  }, [error, weatherDetails])

  // Fetch weather details for last location
  useEffect(() => {
    const lastLocation = getFromLocalstorage('location')

    if (lastLocation) {
      fetchWeatherDetails(lastLocation, unit)
    }
  }, [])

  const handleFetchWeather = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    fetchWeatherDetails(location, unit)

    // Save settings local storage
    saveToLocalstorage('location', location)
  }

  // TODO: Changing unit after fetching should refresh weather details
  const handleUnitChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(evt.target.value)

    // Save setting to local storage
    saveToLocalstorage('unit', unit)
  }

  return (
    <>
      <WeatherHeader>
        <PageHeading>The Weather App</PageHeading>
        <HiddenLabel htmlFor="unit">Unit</HiddenLabel>
        <Select name="unit" value={unit} onChange={handleUnitChange}>
          <option value="imperial">Imperial</option>
          <option value="metric">Metric</option>
        </Select>
      </WeatherHeader>

      <WeatherMain>
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
      </WeatherMain>
    </>
  )
}

export default Weather
