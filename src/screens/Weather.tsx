import styled from 'styled-components'
import Message from '@/components/Message'
import TextInputControl from '@/components/TextInputControl'
import { MessageType } from '@/enums'
import Tile from '@/components/Tile'

const WeatherWrapper = styled.main`
  margin: auto;
  max-width: ${({ theme }) => theme.size[128]};
  padding: ${({ theme }) => theme.space[4]};
`

const WeatherTiles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.space[4]};
`

const Weather = () => {
  return (
    <WeatherWrapper>
      <TextInputControl />
      <Message type={MessageType.Info}>
        Please enter a location to get weather details.
      </Message>
      <Message type={MessageType.Error}>
        Please enter a location to get weather details.
      </Message>
      <WeatherTiles>
        <Tile paramName="Clouds" paramValue="few clouds" iconId="02n" />
        <Tile paramName="Temperature" paramValue="32°C" />
        <Tile paramName="Sunrise" paramValue="6:15 AM" />
        <Tile paramName="Sunset" paramValue="4:20 PM" />
      </WeatherTiles>
    </WeatherWrapper>
  )
}

export default Weather
