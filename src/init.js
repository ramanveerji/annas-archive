import { Appearance } from 'react-native'

const isDarkTheme = Appearance.getColorScheme() === 'dark'
export const API_URL = 'http://dheisom.vps-kinghost.net:1337'

export const darkColors = {
  background: '#282a36',
  thumbnailBackground: '#dfd',
  container: '#44475a',
  borders: '#6272a4',
  text: '#f8f8f2',
  title: '#ffffff',
  notification: '#ff5555',
  buttons: '#8be9fd',
  placeholder: '#ff79c6',
  buttonText: '#282a36',
  loadingAnimation: '#bd93f9'
}

export const lightColors = {
  background: '#ffffef',
  thumbnailBackground: '#dfd',
  container: '#EEE3CB',
  borders: '#9BABB8',
  text: '#111111',
  title: '#000000',
  notification: '#ff5555',
  buttons: '#967E76',
  placeholder: '#D7C0AE',
  buttonText: '#ffffff',
  loadingAnimation: '#D7C0AE'
}

export const colors = isDarkTheme ? darkColors : lightColors
export const navigationTheme = {
  dark: isDarkTheme,
  colors: {
    primary: colors.buttons,
    background: colors.background,
    card: colors.background,
    text: colors.text,
    border: colors.borders,
    notification: colors.notification
  }
}
