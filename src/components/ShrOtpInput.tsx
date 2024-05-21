// import React, {memo, useEffect, useRef, useState} from 'react';
// import {
//   AppState,
//   TextInput,
//   Keyboard,
//   View,
//   StyleSheet,
//   StyleProp,
//   TextStyle,
//   ViewStyle,
//   PermissionsAndroid,
//   DeviceEventEmitter,
//   Platform,
// } from 'react-native';
// import Clipboard from '@react-native-community/clipboard';

// import ShrTextInput from './ShrTextInput';

// interface OTPTextInputProps {
//   length: number;
//   onChangeText: (value: string) => void;
//   onComplete?: (value?: string) => void;
//   textInputStyle?: StyleProp<TextStyle>;
//   wrapperStyle?: StyleProp<ViewStyle>;
//   autoFocus?: boolean;
//   onTrigger?: (value?: string) => void;
//   render?: ({
//     slots,
//     refs,
//     handleChange,
//     handleKeyPress,
//   }: {
//     slots: any[];
//     refs: React.MutableRefObject<TextInput[]>;
//     handleChange: (index: number, value: string) => void;
//     handleKeyPress: (index: number, key: string) => void;
//   }) => React.JSX.Element;
// }

// function generateOTPRegex(length: number) {
//   return new RegExp(`\\b\\d{${length}}\\b`);
// }

// const ShrOtpInput: React.FC<OTPTextInputProps> = ({
//   length = 6,
//   onChangeText,
//   onComplete,
//   onTrigger,
//   textInputStyle,
//   wrapperStyle,
//   autoFocus,
//   render,
// }) => {
//   const [otpArray, setOTPArray] = useState(Array(length).fill(''));
//   const [activeIndex, setActiveIndex] = useState<null | number>(null);
//   const [receiveSmsPermission, setReceiveSmsPermission] = useState('');
//   const inputRefs = useRef<TextInput[]>([]);

//   const requestSmsPermission = async () => {
//     try {
//       const permission = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
//       );
//       setReceiveSmsPermission(permission);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     requestSmsPermission();
//   }, []);

//   useEffect(() => {
//     if (
//       Platform.OS === 'android' &&
//       receiveSmsPermission === PermissionsAndroid.RESULTS.GRANTED
//     ) {
//       const subscriber = DeviceEventEmitter.addListener(
//         'onSMSReceived',
//         message => {
//           const {messageBody} = JSON.parse(message);
//           const verificationCodeRegex = generateOTPRegex(length);
//           if (verificationCodeRegex.test(messageBody)) {
//             const verificationCode = messageBody?.match(
//               verificationCodeRegex,
//             )![0];
//             handleClipboardOTP(verificationCode);

//             onChangeText(verificationCode);
//             onComplete && onComplete(verificationCode);
//             onTrigger && onTrigger(verificationCode);
//           }
//         },
//       );

//       return () => {
//         subscriber.remove();
//       };
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [receiveSmsPermission, length, onTrigger]);

//   useEffect(() => {
//     if (autoFocus) {
//       inputRefs.current[0]?.focus();
//     }
//   }, [autoFocus]);

//   useEffect(() => {
//     handleAppStateChange();
//     const subscription = AppState.addEventListener(
//       'change',
//       handleAppStateChange,
//     );

//     return () => {
//       subscription.remove();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleAppStateChange = async () => {
//     const appState = AppState.currentState;
//     if (appState === 'active') {
//       const clipboardContent = await Clipboard.getString();
//       if (isOTP(clipboardContent)) {
//         handleClipboardOTP(clipboardContent);

//         onChangeText(clipboardContent);
//         onComplete && onComplete(clipboardContent);

//         Clipboard.setString(''); // Clear clipboard after using OTP

//         Keyboard.dismiss();
//         onTrigger && onTrigger(clipboardContent);
//       }
//     }
//   };

//   const isOTP = (text: string) => {
//     return /^\d+$/.test(text) && text.length === length;
//   };

//   const handleClipboardOTP = (clipboardContent: string) => {
//     const clipboardText = clipboardContent?.toString();
//     const clipboardOTPArray = clipboardText.split('').slice(0, length);
//     const newOTPArray = [...otpArray];
//     clipboardOTPArray.forEach((digit, index) => {
//       newOTPArray[index] = digit;
//     });
//     setOTPArray(newOTPArray);
//   };

//   const handleChange = (index: number, value: string) => {
//     const newOtpArray = [...otpArray];
//     newOtpArray[index] = value;
//     setOTPArray(newOtpArray);

//     const otp = newOtpArray.join('');
//     onChangeText(otp);

//     // Move cursor to the next input if available
//     if (value.length > 0 && index < length - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }
//     if (newOtpArray.every(input => input !== '')) {
//       onComplete && onComplete(newOtpArray.join(''));
//       Keyboard.dismiss();
//     }
//   };

//   const handleKeyPress = (index: number, key: string) => {
//     if (key === 'Backspace' && index > 0 && !otpArray[index]) {
//       setOTPArray(prevPin => {
//         for (let i = prevPin.length - 1; i >= 0; i--) {
//           if (prevPin[i] !== '') {
//             prevPin[i] = '';
//             break;
//           }
//         }
//         inputRefs.current[index - 1]?.focus();

//         if (prevPin.every(input => input === '')) {
//           inputRefs.current[0]?.blur();
//         }
//         return [...prevPin];
//       });
//     }
//   };

//   const handleFocus = (index: number) => {
//     setActiveIndex(index);
//   };

//   const handleBlur = () => {
//     setActiveIndex(null);
//   };

//   const renderChildren = React.useMemo(() => {
//     if (render) {
//       return render({
//         slots: otpArray,
//         refs: inputRefs,
//         handleChange,
//         handleKeyPress,
//       });
//     } else {
//       return (
//         <>
//           {otpArray.map((digit, index) => (
//             <ShrTextInput
//               key={index}
//               ref={ref => (inputRefs.current[index] = ref as TextInput)}
//               style={[
//                 styles.textInput,
//                 index === activeIndex && styles.focusedInput,
//                 textInputStyle,
//               ]}
//               value={digit}
//               onChangeText={text => handleChange(index, text)}
//               inputMode="numeric"
//               maxLength={1}
//               onKeyPress={({nativeEvent: {key}}) => handleKeyPress(index, key)}
//               autoFocus={autoFocus && index === 0}
//               onFocus={() => handleFocus(index)}
//               onBlur={handleBlur}
//               onSubmitEditing={Keyboard.dismiss}
//               autoComplete="sms-otp"
//               textContentType="oneTimeCode"
//             />
//           ))}
//         </>
//       );
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [otpArray, autoFocus, textInputStyle, render]);

//   return <View style={[styles.container, wrapperStyle]}>{renderChildren}</View>;
// };

// ShrOtpInput.displayName = 'ShrOtpInput';

// export default memo(ShrOtpInput);

// export const OtpInputGroup = ({children}: {children: React.ReactNode}) => {
//   const [activeIndex, setActiveIndex] = useState<null | number>(null);

//   const handleFocusInChild = (index: number) => {
//     setActiveIndex(index);
//   };

//   const handleBlur = () => {
//     setActiveIndex(null);
//   };

//   return (
//     <>
//       <View style={styles.group}>
//         {React.Children.map(children, (child, index) => {
//           child = child as React.ReactElement;
//           return React.cloneElement(child, {
//             onFocus: () => handleFocusInChild(index),
//             onBlur: handleBlur,
//             style: [
//               styles.input,
//               index === 0 && styles.firstInput,
//               activeIndex === index &&
//                 index === 0 &&
//                 styles.firstInputWithBorder,
//               index === React.Children.count(children) - 1 && styles.lastInput,
//               activeIndex === index &&
//                 index === React.Children.count(children) - 1 &&
//                 styles.lastInputWithBorder,
//               activeIndex === index && styles.focusedInput,
//               child?.props?.style,
//             ],
//             maxLength: 1,
//             autoComplete: 'sms-otp',
//             textContentType: 'oneTimeCode',
//           });
//         })}
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   group: {
//     flexDirection: 'row',
//   },
//   container: {
//     flexDirection: 'row',
//     columnGap: 8,
//     rowGap: 8,
//     flexWrap: 'wrap',
//   },
//   focusedInput: {
//     borderWidth: 2,
//   },
//   input: {
//     width: 50,
//     aspectRatio: 1,
//     textAlign: 'center',
//     fontSize: 18,
//     padding: 10,
//     borderRadius: 0,
//   },
//   textInput: {
//     borderWidth: 1,
//     padding: 10,
//     width: 45,
//     textAlign: 'center',
//   },
//   firstInput: {
//     borderTopLeftRadius: 8,
//     borderBottomLeftRadius: 8,
//     borderRightWidth: 0,
//   },
//   firstInputWithBorder: {
//     borderTopLeftRadius: 8,
//     borderBottomLeftRadius: 8,
//     borderRightWidth: 2,
//   },
//   lastInput: {
//     borderTopRightRadius: 8,
//     borderBottomRightRadius: 8,
//     borderLeftWidth: 0,
//   },
//   lastInputWithBorder: {
//     borderTopRightRadius: 8,
//     borderBottomRightRadius: 8,
//     borderLeftWidth: 2,
//   },
// });
