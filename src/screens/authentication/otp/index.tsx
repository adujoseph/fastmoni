import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import Custombutton from '../../../components/CustomButton';
import { Colors } from '../../../utils/themes';
import { dash, register, resetpassword } from '../../../utils/constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { requestOtp, validateOtp } from '../../../services/Otp';
import CustomText from '../../../components/CustomText';

const OtpScreen = ({ navigation, route }: any) => {
  const {email, phone} = route.params;
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('')
  const [show, setShow] = useState(false)
  const [countdown, setCountdown] = useState<number>(59);
  const [startCount, setStartCount] = useState<boolean>(true);

  useEffect(() => {
    // if (startCount) handleCount();
    let interval = setInterval(() => {
      if (startCount && countdown > 0) {
        setCountdown(countdown => (countdown === 0 ? 0 : countdown - 1));
      } else if (countdown === 0) {
        setStartCount(false);
      } else {
        setStartCount(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [startCount, countdown]);

  const handleSubmit = () => {
    if (!otp || otp.length !== 6) {
      setErrorMessage('Enter valid otp');
      return
    }
    handleCodeSubmit(otp)
  };
  const handleResendOtp = async () => {
    setOtp('')
    setCountdown(59)
    setStartCount(true)
    setLoading(true)
    const payload = {
      email,
      phone,
    };
    const { data, status } = await requestOtp(payload);
    setLoading(false)
  }


  const handleCodeSubmit = async (code: string) => {
    console.log(code)
    setLoading(true)
    const payload = {
      email,
      otp: code,
    };
    const response = await validateOtp(payload);
    if (response?.status === 200) {
      navigation.navigate(register, { email, phone });
    } else {
      setErrorMessage(response.message)
    }
    if (response?.error) setErrorMessage(response?.error)
    setLoading(false)
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 80 }}>
        <CustomText style={styles.login}>Verify Your Account</CustomText>
        <CustomText style={styles.continue}>
          Please enter the 6 digit pin sent to your phone number and/or email.
        </CustomText>
      </View>
      <View
        style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
      >
        <OTPInputView
          style={styles.otpInput}
          placeholderTextColor="#ccc"
          pinCount={6}
          onCodeChanged={code => setOtp(code)}
          autoFocusOnLoad
          codeInputFieldStyle={{
            width: 30,
            height: 45,
            color: Colors.primary,
            borderWidth: 0,
            borderBottomWidth: 3,
            borderBottomColor: Colors.primary
          }}
          codeInputHighlightStyle={{
            borderColor: Colors.primary
          }}
          secureTextEntry={show}
          // clearInputs={true}
          keyboardType="number-pad"
          // codeInputFieldStyle={{color: '#000', fontSize: 16, padding: 10}}
          onCodeFilled={code => {
            handleCodeSubmit(code);
          }}
        />
        <TouchableOpacity onPress={() => setShow(!show)} style={{ justifyContent: 'flex-end', width: '100%' }}>
          <CustomText style={{ textAlign: 'right', color: '#333' }}>{show ? 'show' : 'hide'}</CustomText>
        </TouchableOpacity>
      </View>
      {countdown > 0 ?
        <CustomText style={{fontSize: 14, fontWeight:'bold'}}>0:{countdown > 9 ? countdown : `0${countdown}`}</CustomText>
        :
        <Pressable onPress={handleResendOtp}>
          <CustomText style={{ color: '#333' }}>Resend OTP</CustomText>
        </Pressable>}
      <Custombutton title="Verify" onPress={handleSubmit} isLoading={loading} />

      {errorMessage ? (
        <View
          style={{
            backgroundColor: 'pink',
            padding: 10,
            marginTop: 10,
            borderRadius: 8,
          }}
        >
          <CustomText style={{ color: 'red', fontSize: 10 }}>{errorMessage}</CustomText>
        </View>
      ) : null}
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  login: {
    color: '#000000',
    fontSize: 20,
    lineHeight: 29,
    fontWeight: '700',
  },
  continue: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 23.5,
    fontWeight: '400',
    marginTop: 10,
  },
  otpInput: {
    width: '100%',
    height: 100,
  },
});
