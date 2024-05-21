import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoute from './Stackroutes';
import { navigationRef } from '../../RootNavigation';

const Routes: React.FC = () => {
  return (
    <NavigationContainer  ref={navigationRef}>
      <StackRoute />
    </NavigationContainer>
  );
};

export default Routes;