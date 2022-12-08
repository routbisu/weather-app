export type WeatherParam = {
  name: string
  value: string
  iconId?: string
}

export type WeatherDetails = {
  location: string
  coord?: {
    lat: number
    lon: number
  }
  parameters: WeatherParam[]
}
