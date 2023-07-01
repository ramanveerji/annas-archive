import { Appearance } from 'react-native'

const isDarkTheme = Appearance.getColorScheme() === 'dark'
export const API_URL = 'http://dheisom.vps-kinghost.net:1338'

export const darkColors = {
  // backgrounds
  background: '#282a36',
  thumbnail: '#6272a4',
  container: '#44475a',
  button: '#8be9fd',
  // texts
  text: '#f8f8f2',
  title: '#ffffff',
  placeholder: '#ff79c6',
  buttonText: '#282a36',
  // others
  border: '#6272a4',
  notification: '#ff5555',
  loadingAnimation: '#bd93f9'
}

export const lightColors = {
  // backgrounds
  background: '#fff',
  thumbnail: '#dfd',
  container: '#EEE3CB',
  button: '#967E76',
  // texts
  text: '#111111',
  title: '#000000',
  placeholder: '#D7C0AE',
  buttonText: '#ffffff',
  // others
  border: '#9BABB8',
  notification: '#ff5555',
  loadingAnimation: '#D7C0AE'
}

export const colors = isDarkTheme ? darkColors : lightColors
export const navigationTheme = {
  dark: isDarkTheme,
  colors: {
    primary: colors.button,
    background: colors.background,
    card: colors.background,
    text: colors.text,
    border: colors.border,
    notification: colors.notification
  }
}
