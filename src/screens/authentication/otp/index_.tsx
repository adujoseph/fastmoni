// import React, {useState, useEffect, useContext} from 'react';
// import {
//   View,
//   ScrollView,
//   StatusBar,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   TextInput,
//   TouchableOpacity,
//   Text
// } from 'react-native';
// // import {styles} from './styles';
// // import BackIcon from 'assets/icons/BackIcon/index.color';
// // import {getConfig} from '../../_backendCalls/getConfig';
// // import Loader from 'screens/_components/Loader';
// // import {colors} from 'colors';
// // import {validateToken} from './backend/validateToken';
// // import Toast from 'screens/utilities/Toast';
// // import {setToken} from 'services/axiosService';
// // import {getProfile} from 'screens/_backendCalls/getProfile';
// // import {setDomain} from 'services/axiosService';
// // import NavigationContext from 'screens/authenticationScreens/contexts/NavigationContext';
// // import {setUserInfo} from '../utilities/setUserInfo';
// // import {addSlash} from 'screens/utilities/addSlash';
// // import {login} from '../phoneAuthScreen/backend/login';
// // import {saveAsyncStorage} from 'screens/utilities/secureStorage';
// // import ShrOtpInput, {OtpInputGroup} from 'screens/_components/ShrOtpInput';
// // import Button from 'screens/_components/Button';
// // import TextInput from 'screens/_components/TextInput';
// // import Dots from 'assets/icons/Dots';
// // import {validateTimeManagementAuth} from 'screens/_backendCalls/timeManagement';

// const PhoneAuthScreen = ({route, navigation}: any) => {
//   const {item, server} = route.params;
//   const [code, setCode] = useState<string>('');
//   const [isLoading, setLoading] = useState<boolean>(false);
//   const [{}, setDisable] = useState<boolean>(true);
//   const [countdown, setCountdown] = useState<number>(59);
//   const [startCount, setStartCount] = useState<boolean>(true);






//   return (
//     <ScrollView
//       contentContainerStyle={[styles.container]}
//       keyboardShouldPersistTaps="handled">
//       {isLoading && <Loader action="Verifying code" />}
//       <StatusBar barStyle="dark-content" />

//       <KeyboardAvoidingView
//         style={styles.keyboardAvoidingView}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 2 : undefined}>
//         <View>
       
//           <View style={{paddingTop: 20}}>
//             <Text title="Enter OTP" style={{marginBottom: 5}} />
//             <ShrOtpInput
//               length={6}
//               onChangeText={val => setCode(val)}
//               onComplete={() => {
//                 setDisable(true);
//               }}
//               textInputStyle={styles.textInputStyle}
//               render={({slots, refs, handleChange, handleKeyPress}) => {
//                 const firstThreeSlots = slots.slice(0, 3);
//                 const lastThreeSlots = slots.slice(3);
//                 return (
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       flexWrap: 'wrap',
//                       zIndex: 9999,
//                     }}>
//                     <OtpInputGroup>
//                       {firstThreeSlots.map((digit, index) => (
//                         <TextInput
//                           key={index}
//                           ref={ref => (refs.current[index] = ref as TextInput)}
//                           value={digit}
//                           onChangeText={text => handleChange(index, text)}
//                           inputMode="numeric"
//                           maxLength={1}
//                           style={styles.textInputStyle}
//                           onKeyPress={({nativeEvent: {key}}) =>
//                             handleKeyPress(index, key)
//                           }
//                           onSubmitEditing={Keyboard.dismiss}
//                           placeholderTextColor={colors.borderColor}
//                           autoComplete="sms-otp"
//                           textContentType="oneTimeCode"
//                         />
//                       ))}
//                     </OtpInputGroup>
//                     <View
//                       style={{
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                       }}>
//                       <Dots size={30} color={colors.primary} />
//                     </View>
//                     <OtpInputGroup>
//                       {lastThreeSlots.map((digit, index) => (
//                         <TextInput
//                           key={index + 3}
//                           ref={ref =>
//                             (refs.current[index + 3] = ref as TextInput)
//                           }
//                           value={digit}
//                           onChangeText={text => handleChange(index + 3, text)}
//                           inputMode="numeric"
//                           style={styles.textInputStyle}
//                           maxLength={1}
//                           onKeyPress={({nativeEvent: {key}}) =>
//                             handleKeyPress(index + 3, key)
//                           }
//                           onSubmitEditing={Keyboard.dismiss}
//                           placeholderTextColor={colors.borderColor}
//                           autoComplete="sms-otp"
//                           textContentType="oneTimeCode"
//                         />
//                       ))}
//                     </OtpInputGroup>
//                   </View>
//                 );
//               }}
//             />
//           </View>
  
//         </View>
//       </KeyboardAvoidingView>
//     </ScrollView>
//   );
// };

// export default PhoneAuthScreen;
