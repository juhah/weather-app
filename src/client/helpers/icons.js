const WEATHER_ICONS = {
  '01d' : 'day-sunny',
  '02d' : 'day-cloudy',
  '03d' : 'cloud',
  '03n' : 'cloud',
  '04d' : 'cloudy',
  '04n' : 'cloudy',
  '09d' : 'day-showers',
  '09n' : 'night-showers',
  '10d' : 'day-rain',
  '10n' : 'night-rain',
  '11d' : 'day-thunderstorm',
  '11n' : 'night-thunderstorm',
  '13d' : 'day-snow',
  '13n' : 'night-snow',
  '50d' : 'day-fog',
  '50n' : 'night-fog'
}

export function icon(icon) {
  return WEATHER_ICONS[icon] ? WEATHER_ICONS[icon] : icon
}
