import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationTheme } from './init'
import HomeScreen from './screens/Home'
import SearchScreen from './screens/Search'

const Stack = createNativeStackNavigator()

const Main = () => (
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
    <StatusBar style={navigationTheme.dark ? 'light' : 'dark'} />
  </NavigationContainer>
)

export default Main
