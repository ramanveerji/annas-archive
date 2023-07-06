import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as NavigationBar from 'expo-navigation-bar'
import { StatusBar } from 'expo-status-bar'

import { navigationTheme } from './init'
import DownloadScreen from './screens/Download'
import HomeScreen from './screens/Home'
import SearchScreen from './screens/Search'

const Stack = createNativeStackNavigator()

const Main = () => {
  const reverseTheme = navigationTheme.dark ? 'light' : 'dark'
  NavigationBar.setBackgroundColorAsync(navigationTheme.colors.background)
  NavigationBar.setButtonStyleAsync(reverseTheme)
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{ title: "Anna's Archive" }}
        />
        <Stack.Screen
          component={SearchScreen}
          name="Search"
          options={{ title: 'Search...' }}
        />
        <Stack.Screen
          component={DownloadScreen}
          name="Download"
          options={{ title: 'Download' }}
        />
      </Stack.Navigator>
      <StatusBar style={reverseTheme} />
    </NavigationContainer>
  )
}

export default Main
