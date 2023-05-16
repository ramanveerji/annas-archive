import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/Home'

const Stack = createNativeStackNavigator()

const Main = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ title: "Anna's Archive" }}
        component={HomeScreen}
      />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
)

export default Main
