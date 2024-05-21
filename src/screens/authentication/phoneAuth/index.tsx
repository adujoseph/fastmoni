import {StyleSheet, Text, View, TouchableOpacity, Keyboard, Alert, Pressable, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import Custombutton from '../../../components/CustomButton';
import {Colors} from '../../../utils/themes';
import {register, otp, login} from '../../../utils/constants';
import auth from '@react-native-firebase/auth';
import {supabase} from '../../../lib/supabase';
import {request} from '../../../services/makeRequest';
import {requestOtp} from '../../../services/Otp';
import CustomText from '../../../components/CustomText';
import {MotiView} from 'moti';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'

const PhoneAuthScreen = ({navigation}: any) => {
  // const [showOtp, setShowOtp] = useState(false);
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inviteCode, setInviteCode] = useState('')
  const [loading, SetLoading] = useState(false);
  const [isKeyboardShown, setKeyboardShown] = useState(false)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShown(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShown(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  const handleUserVerification = async () => {
    if (!phonenumber && phonenumber.length > 10) {
      setErrorMessage('Please enter valid phone number');
      return;
    }
    if (!email) {
      setErrorMessage('Please enter email address');
      return;
    }
    if(!inviteCode){
      setErrorMessage('Please enter invitation code');
      return;
    }
    if(inviteCode.trim() !== 'Itsforever'){
      setErrorMessage('Oops! Your reference code is not valid. Please contact the app admin');
      return;
    }
    const emailRegex = /^[\w-.]+@([\w-]+.)+[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter valid email address');
      return;
    }
    SetLoading(true);
    let phone = `234${phonenumber}`;
    const payload = {
      email,
      phone,
    };
    const response = await requestOtp(payload);
    console.log({response})
    if (response.status === 200) {
      navigation.navigate(otp, {phone, email});
    } else {
      setErrorMessage(response.message);
    }
    SetLoading(false);
  };

  return (
    <MotiView
style={{flexGrow: 1}}
    animate={{
      translateY: isKeyboardShown ? hp(-7) : 0,
    }}>
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboard}
        >
      <View style={{marginTop: 20}}>
        <CustomText style={styles.text}>
          Please use a valid phone and email address as verification code will
          be sent to the phone number and email you supply.
        </CustomText>
        <CustomTextInput
          label="Enter Phone Number"
          keyboardType="number-pad"
          onFocus={() => setErrorMessage('')}
          value={phonenumber}
          maxLength={10}
          onChangeText={(val: string) => setPhonenumber(val)}
          phone
        />
        <CustomTextInput
          label="Enter email address"
          keyboardType="email-address"
          onFocus={() => setErrorMessage('')}
          value={email}
          onChangeText={(val: string) => setEmail(val)}
        />
        <CustomTextInput
          label="Enter invitation code"
          keyboardType="default"
          onFocus={() => setErrorMessage('')}
          value={inviteCode}
          onChangeText={(val: string) => setInviteCode(val)}
        />
      </View>

      <Custombutton
        title={'Continue'}
        onPress={handleUserVerification}
        isLoading={loading}
      />
      <Pressable onPress={() => navigation.navigate(login)} style={{padding: 10}}><Text style={{textAlign:'center', color:'#333'}}>Already have an account? Log in</Text></Pressable>

      {errorMessage ? (
        <View
          style={{
            backgroundColor: 'pink',
            padding: 10,
            marginTop: 10,
            borderRadius: 8,
          }}
        >
          <CustomText style={{color: 'red', fontSize: 14}}>{errorMessage}</CustomText>
        </View>
      ) : null}
      </KeyboardAvoidingView>
    </ScrollView>
    </MotiView>
  );
};

export default PhoneAuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  text: {
    paddingBottom: 20,
    color: '#333',
    fontSize: 15,
    lineHeight: 19,
  },
  content: {flexGrow: 1},
  keyboard: {
    flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
    // backgroundColor: '#fff',
  },
});
