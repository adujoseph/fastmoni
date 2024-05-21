import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import DashboardScreen from '../../../screens/dashboard'
import { dash } from '../../../utils/constants';

const HomeStack = createStackNavigator()

const horizontalAnimation = {
  gestureDirection: 'horizontal-inverted',
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName={dash} screenOptions={{}}>
    <HomeStack.Screen
      name={dash}
      component={DashboardScreen}
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
