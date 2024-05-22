import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Text,
  Keyboard,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

//stackRoutes
import HomeStack from './routes/dashboard';
import GalleryStack from './routes/gallery';
import GiftingStack from './routes/gitfing';
import CameraStack from './routes/camera';
import SettingStack from './routes/settings';
import {Colors} from '../../utils/themes';
import {globalStyles} from '../../utils/globalstyles';
//Icons
import DashboardIcon from '../../assets/icons/DashboardIcon';
import GalleryIcon from '../../assets/icons/GalleryIcon';
import CameraIcon from '../../assets/icons/CameraIcon';
import GiftIcon from '../../assets/icons/GiftIcon';
import SettingIcon from '../../assets/icons/SettingsIcon';
import CameraShotScreen from '../../screens/cameraShot';


const Tabs = createBottomTabNavigator();

const {text_bottom_nav} = globalStyles;

const FocusView = ({Icon, text, focus}: any) => {
  return (
    <View
      style={{
        // backgroundColor: Colors.primary,
        // padding: 10,
        // borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon focus={focus} />
      <Text style={[text_bottom_nav, {paddingLeft: 5}]}>{text}</Text>
    </View>
  );
};

const TabContent = ({text, isFocused, MyIcon}: any) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isFocused ? <MyIcon focus={true} /> : <MyIcon />}

      {text === 'camera' ? null : (
        <Text
          style={{
            color: isFocused ? Colors.primary : '#555555',
            fontSize: 10,
            paddingTop: 5,
          }}
        >
          {text}
        </Text>
      )}
    </View>
  );
};
const CustomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.bottom}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress()}
            accessibilityRole="button"
            testID={options.tabBarTestID}
          >
            {index === 0 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <TabContent
                    MyIcon={DashboardIcon}
                    text="Dashboard"
                    isFocused={true}
                  />
                ) : (
                  <TabContent
                    MyIcon={DashboardIcon}
                    text="Dashboard"
                    isFocused={false}
                  />
                )}
              </View>
            )}
            {/* {index === 4 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <TabContent
                    MyIcon={GalleryIcon}
                    text="Gallery"
                    isFocused={true}
                  />
                ) : (
                  <TabContent
                    MyIcon={GalleryIcon}
                    text="Gallery"
                    isFocused={false}
                  />
                )}
              </View>
            )} */}

            {/* {index === 2 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <TabContent
                    MyIcon={CameraIcon}
                    text="camera"
                    isFocused={true}
                  />
                ) : (
                  <TabContent
                    MyIcon={CameraIcon}
                    text="camera"
                    isFocused={false}
                  />
                )}
              </View>
            )} */}
            {/* {index === 3 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <TabContent
                    MyIcon={GiftIcon}
                    text="Gifting"
                    isFocused={true}
                  />
                ) : (
                  <TabContent
                    MyIcon={GiftIcon}
                    text="Gifting"
                    isFocused={false}
                  />
                )}
              </View>
            )} */}
            {index === 1 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <TabContent
                    MyIcon={SettingIcon}
                    text="Settings"
                    isFocused={true}
                  />
                ) : (
                  <TabContent
                    MyIcon={SettingIcon}
                    text="Settings"
                    isFocused={false}
                  />
                )}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Stack = createStackNavigator();

const BottomTabBottom = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    // Listen for keyboard events and update state
    Keyboard.addListener('keyboardDidShow', () => setIsKeyboardVisible(true));
    Keyboard.addListener('keyboardDidHide', () => setIsKeyboardVisible(false));

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  const handleCameraView = () => {
    console.log('handle camera');
  };

  return (
    <Tabs.Navigator
      initialRouteName={'home'}
      screenOptions={{
        tabBarStyle: {backgroundColor: '#333'},
        tabBarHideOnKeyboard: true,
      }}
      sceneContainerStyle={{backgroundColor: '#333'}}
      tabBar={props =>
        !isKeyboardVisible ? <CustomTabBar {...props} /> : null
      }
    >
      <Tabs.Screen
        name={'home'}
        component={HomeStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      {/* <Tabs.Screen
        name={'support_'}
        component={GalleryStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      />

      <Tabs.Screen
        name={'camera'}
        component={CameraStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tabs.Screen
        name={'profile'}
        component={GiftingStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      /> */}
      <Tabs.Screen
        name={'profile_'}
        component={SettingStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: '#fff',
    // marginBottom: hp(2),
    // borderRadius: hp(4),
    // borderWidth: 0.4,
    //borderColor: Colors.primary,
    // marginHorizontal: hp(2.5),
    //paddingTop: 10,
    //paddingBottom: 10,
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  middleIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    bottom: 10,
    //  backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  iconMiddle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    ///padding: 16,
    position: 'absolute',
    bottom: 0,
    zIndex: 999999,
  },
});

export default BottomTabBottom;
