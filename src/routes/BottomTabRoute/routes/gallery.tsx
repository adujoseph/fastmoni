import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import DashboardScreen from '../../../screens/dashboard'
import { gallery } from '../../../utils/constants'
import GalleryScreen from '../../../screens/gallery'


const HomeStack = createStackNavigator()

const horizontalAnimation = {
  gestureDirection: 'horizontal-inverted',
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName={gallery} screenOptions={{}}>
    <HomeStack.Screen
      name={gallery}
      component={GalleryScreen}
      options={{
        headerTransparent: false,
        headerTitle: 'Wedding Gallery',
        headerShown: true,
        headerTitleAlign: 'center',
        headerBackTitle: '',
        // headerTintColor: "#E96B03",
        headerLeft: (props)  => null,
      }}
    />
  </HomeStack.Navigator>
)

export default HomeStackScreen