import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import { setting } from '../../../utils/constants'
import SettingsScreen from '../../../screens/settings'

const HomeStack = createStackNavigator()

const horizontalAnimation = {
  gestureDirection: 'horizontal-inverted',
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName={setting} screenOptions={{}}>
    <HomeStack.Screen
      name={setting}
      component={SettingsScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerShown: false,
        headerBackTitle: '',
        // headerTintColor: "#E96B03",
      }}
    />
  </HomeStack.Navigator>
)

export default HomeStackScreen