import 'react-native-reanimated'
import 'react-native-gesture-handler'
import React from 'react';
import type { PropsWithChildren } from 'react';
import Routes from './src/routes';
import { useColorScheme, StatusBar } from 'react-native';
import { Colors } from './src/utils/themes';
import { ToastProvider } from './src/hooks/useToast';
import CodePush from 'react-native-code-push';
import { UserProvider } from './src/store/Store';
import OtpScreen from './src/screens/authentication/otp/index';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <UserProvider>
        <ToastProvider>
          <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
          <Routes />
          {/* <OtpScreen /> */}
        </ToastProvider>
      </UserProvider>
    </>
  );
}

export default CodePush(App);