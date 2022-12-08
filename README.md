# Weather App

Use this app to view current weather details for a location.

## Steps

- Clone and install using `npm i`
- Start app by `npm run dev`
- For generating a production builds: `npm run build`
- For generating a production build followed by preview: `npm run preview`
- To run unit tests: `npm test`

## CI / CD

Configured with github actions to deploy to github pages at https://routbisu.github.io/weather-app/

### TODOs

- Style the unit selections dropdown / build new component (uses native html select now)
- Move the HiddenLabel component to a central place
- Add error monitoring and tracking
- Changing unit after fetching weather details must refresh it silently (without showing loading state)
- Add snapshot testing for all components to flag visual changes
- Component tests needed for all components.
- Add E2E tests with cypress.
- Add React i18n-next for localization support.
- Add Storybook for isolated component testing.
- Add Chromatic to CI/CD for flagging visual changes to components.
