import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import { gifts } from '../../../utils/constants'
import GiftingScreen from '../../../screens/gifting'

const HomeStack = createStackNavigator()

const horizontalAnimation = {
  gestureDirection: 'horizontal-inverted',
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName={gifts} screenOptions={{}}>
    <HomeStack.Screen
      name={gifts}
      component={GiftingScreen}
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