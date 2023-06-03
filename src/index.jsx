import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationTheme, colors } from './init'
import * as NavigationBar from 'expo-navigation-bar'
import HomeScreen from './screens/Home'
import SearchScreen from './screens/Search'

const Stack = createNativeStackNavigator()

const Main = () => {
  const reverseTheme = navigationTheme.dark ? 'light' : 'dark'
  NavigationBar.setBackgroundColorAsync(colors.background)
  NavigationBar.setButtonStyleAsync(reverseTheme)
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: "Anna's Archive" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Search"
          options={{ title: 'Procurar...' }}
          component={SearchScreen}
        />
      </Stack.Navigator>
      <StatusBar style={reverseTheme} />
    </NavigationContainer>
  )
}

export default Main
