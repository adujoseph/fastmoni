import React, { useState } from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import {
    login, forgetpassword, phoneAuth, register, authsuccess, splashscreen, dash, onboarding, welcome, setpassword, otp, resetpassword, cardtransfer, banktransfer, map, camera, shots,
    photoview
} from '../../utils/constants';
import BottomStack from "../BottomTabRoute";
import Splashscreen from '../../screens/authentication/splashscreen';
import LoginScreen from '../../screens/authentication/login';
import PhoneAuthScreen from '../../screens/authentication/phoneAuth';
// import RegisterScreen from '../../screens/authentication/register';
// import SuccessScreen from '../../screens/authentication/success';
import ForgotPasswordScreen from '../../screens/authentication/forgotPassword';
import OnboardingScreen from '../../screens/authentication/onboarding/index';
import WelcomeScreen from '../../screens/authentication/welcome';
import SetPasswordScreen from '../../screens/authentication/setpassword';
import ResetPasswordScreen from '../../screens/authentication/resetpassword';
// import OtpScreen from '../../screens/authentication/otp';
// import BankTransferScreen from '../../screens/gifting/screens/BankTransfer';
// import CardTransferScreen from '../../screens/gifting/screens/CardTransfer';
// import MapScreen from '../../screens/dashboard/map/index';
// import CameraShotScreen from '../../screens/cameraShot';
// import CameraScreen from '../../screens/cameraShot/Camera';


const RootStack = createStackNavigator();

//TODO: Good to have, dissolve screen:
const horizontalAnimation = {
    gestureDirection: 'horizontal',
    gestureEnabled: false,
};

const RootStackScreen = () => (
    <RootStack.Navigator
        initialRouteName={splashscreen}
        screenOptions={
            (horizontalAnimation,
            {
                headerTitleAlign: 'center',
                fontWeight: 'bold',
                headerBackTitle: ''
            })
        }>
        <RootStack.Screen
            name={splashscreen}
            component={Splashscreen}
            options={{
                headerTransparent: true,
                headerTitle: '',
                headerBackTitle: ''
                // headerTintColor: "#E96B03",
            }}
        />
        <RootStack.Screen
            name={onboarding}
            component={OnboardingScreen}
            options={{
                headerTransparent: true,
                headerBackTitle: '',
                headerTitle: '',
                headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />
        <RootStack.Screen
            name={welcome}
            component={WelcomeScreen}
            options={{
                headerTransparent: true,
                headerBackTitle: '',
                headerTitle: '',
                headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />
        <RootStack.Screen
            name={login}
            component={LoginScreen}
            options={{
                headerTransparent: true,
                headerTitle: '',
                headerBackTitle: '',
                headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />
        <RootStack.Screen
            name={phoneAuth}
            component={PhoneAuthScreen}
            options={{
                headerShown: false,
                headerTransparent: true,
                headerTitle: '',
                headerBackTitle: '',
                // headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />
        {/* <RootStack.Screen
            name={register}
            component={RegisterScreen}
            options={{
                headerTransparent: true,
                headerTitle: '',
                headerBackTitle: '',
                headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />
        <RootStack.Screen
            name={setpassword}
            component={SetPasswordScreen}
            options={{
                headerTransparent: true,
                headerTitle: '',
                headerBackTitle: '',
                headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />
        <RootStack.Screen
            name={authsuccess}
            component={SuccessScreen}
            options={{
                headerTransparent: true,
                headerTitle: '',
                headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />
        <RootStack.Screen
            name={forgetpassword}
            component={ForgotPasswordScreen}
            options={{
                headerTransparent: true,
                headerTitle: '',
                headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />
        <RootStack.Screen
            name={otp}
            component={OtpScreen}
            options={{
                headerTransparent: true,
                headerTitle: '',
                // headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />

        <RootStack.Screen
            name={resetpassword}
            component={ResetPasswordScreen}
            options={{
                headerTransparent: true,
                headerTitle: '',
                headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />
        <RootStack.Screen
            name={map}
            component={MapScreen}
            options={{
                headerTransparent: true,
                headerTitle: '',
                // headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />

        <RootStack.Screen
            name={cardtransfer}
            component={CardTransferScreen}
            options={{
                headerTransparent: true,
                headerTitle: 'Show your love with a cash gift',
                // headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        />
        <RootStack.Screen
            name={banktransfer}
            component={BankTransferScreen}
            options={{
                headerTransparent: true,
                headerTitle: 'Gifting couple',
                // headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        /> */}
{/* 
        <RootStack.Screen
            name={shots}
            component={CameraScreen}
            options={{
                headerTransparent: true,
                headerTitle: 'Gifting couple',
                // headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        /> */}

        {/* <RootStack.Screen
            name={photoview}
            component={CameraScreen}
            options={{
                headerTransparent: true,
                headerTitle: '',
                headerLeft: () => null,
                headerTintColor: '#000',
                headerStyle: {
                    backgroundColor: '#F6F6F6',
                },
            }}
        /> */}



        <RootStack.Screen
            name={dash}
            component={BottomStack}
            options={{
                headerShown: false,
                headerTransparent: true,
                headerTitle: "",
                // headerTintColor: 'white',
            }}
        />
    </RootStack.Navigator>
);

export default RootStackScreen;
