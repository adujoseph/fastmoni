import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import { camera } from '../../../utils/constants'
import CameraShotScreen from '../../../screens/cameraShot'

const CameraStack = createStackNavigator()

const horizontalAnimation = {
  gestureDirection: 'horizontal-inverted',
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

const CameraStackScreen = () => (
  <CameraStack.Navigator initialRouteName={camera} screenOptions={{}}>
    <CameraStack.Screen
      name={camera}
      component={CameraShotScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerShown: false,
        headerBackTitle: '',
        // headerTintColor: "#E96B03",
      }}
    />
  </CameraStack.Navigator>
)

export default CameraStackScreen