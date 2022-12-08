import { light } from '@/themes'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { describe, expect, test } from 'vitest'

import Tile from './Tile'

describe('Tile', () => {
  test('renders param name, value, icon alt text', () => {
    render(
      <ThemeProvider theme={light}>
        <Tile paramName="Temp" paramValue="22" iconId="04n" />
      </ThemeProvider>
    )

    // check if tile rendered the param name
    expect(screen.getByText(/Temp/i)).toBeDefined()

    // check if tile rendered the param value
    expect(screen.getByText(/22/i)).toBeDefined()

    // check if the icon alt text is visible
    expect(screen.getAllByAltText(/Temp/i)).toBeDefined()
  })
})
