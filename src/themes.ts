const allSizes = [...new Array(256)].map((_, idx) => idx * 4)

export const base = {
  space: [
    '0px',
    '2px',
    '4px',
    '8px',
    '16px',
    '32px',
    '64px',
    '128px',
    '256px',
    '512px',
  ],
  size: allSizes.map(
    (size) => `${size}px`
  ) /** 0px to 1024px incremented by 4px in each step */,
  fontSize: ['10px', '12px', '14px', '16px', '20px', '24px', '32px', '40px'],
}

export const light = {
  ...base,
  colors: {
    primary: '#4851f4',
    error: '#E53E3E',
    background: '#f8f8f8',
    backgroundTile: '#fcfcfc',
    errorBackground: '#FFF5F5',
    border: '#deebf1',
    text: '#202224',
    focus: '#607778',
    textInverse: '#f1f1f1',
  },
}
