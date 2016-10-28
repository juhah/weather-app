const WEATHER_ICONS = {
  '01d' : 'day-sunny',
  '02d' : 'day-cloudy',
  '03d' : 'cloud',
  '03n' : 'cloud',
  '04d' : 'cloudy',
  '04n' : 'cloudy',
  '09d' : 'showers',
  '09n' : 'night-showers',
  '10d' : 'rain',
  '10n' : 'night-rain',
  '11d' : 'day-thunderstorm',
  '11n' : 'night-thunderstorm',
  '13d' : 'snow',
  '13n' : 'night-snow',
  '50d' : 'day-fog',
  '50n' : 'night-fog'
}

const WIND_DIRECTION = {
  'n'   : [348.75, 11.25],
  'nne' : [11.25, 33.75],
  'ne'  : [33.75, 56.25],
  'ene' : [56.25, 78.75],
  'e'   : [78.75, 101.25],
  'ese' : [101.25, 123.75],
  'se'  : [123.75, 146.25],
  'sse' : [146.25, 168.75],
  's'   : [168.75, 191.25],
  'ssw' : [191.25, 213.75],
  'sw'  : [213.75, 236.25],
  'wsw' : [236.25, 258.75],
  'w'   : [258.75, 281.25],
  'wnw' : [281.25, 303.75],
  'nw'  : [303.75, 326.25],
  'nnw' : [326.25, 348.75]
}

export function icon(icon) {
  return WEATHER_ICONS[icon] ? WEATHER_ICONS[icon] : icon
}

export function cardinalDirection(degrees) {
  for(let key of Object.keys(WIND_DIRECTION)) {
    const [start, end] = WIND_DIRECTION[key]

    if(degrees >= start && degrees <= end) {
      return key
    }
  }

  return null
}
