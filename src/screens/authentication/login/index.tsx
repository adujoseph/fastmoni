import {StyleSheet, Text, View, TouchableOpacity, Keyboard} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import Custombutton from '../../../components/CustomButton';
import {
  dash,
  forgetpassword,
  phoneAuth,
  register,
} from '../../../utils/constants';
import {Colors} from '../../../utils/themes';
import {signinUser} from '../../../services/Authentication';
import { UserContext } from '../../../store/Store';
import CustomText from '../../../components/CustomText';
import {MotiView} from 'moti';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const LoginScreen = ({navigation}: any) => {
  const {userDetails, setUserDetails} = useContext<any>(UserContext);

  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleRegister = () => {
    navigation.navigate(phoneAuth);
  };
  const handleForgotPass = () => {
    navigation.navigate(forgetpassword);
  };

  const handleLogin = async () => {
    if (!phonenumber ) {
      setErrorMessage('Enter valid email');
      return;
    }
    if (!password) {
      setErrorMessage('Enter password field');
      return;
    }
    setLoading(true);
    navigation.replace(dash)
    setLoading(false);
  };
  return (
    <MotiView
    style={{flexGrow: 1}}
        animate={{
          translateY: isKeyboardShown ? hp(-7) : 0,
        }}>
    <View style={styles.container}>
      <View style={{marginTop: 80}}>
        <CustomText style={styles.login}>Access Fastamoni</CustomText>
      </View>
      <View>
        <CustomTextInput
          placeholder="Email address"
          placeholderTextColor={'lightgray'}
          value={phonenumber}
          onChangeText={setPhonenumber}
          keyboardType="email-address"
        />
        <CustomTextInput
          placeholder="Password"
          placeholderTextColor={'lightgray'}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={handleForgotPass}
        >
          <Text>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <Custombutton
        title="Log In"
        onPress={handleLogin}
        isLoading={loading}
      />
      {errorMessage ? (
        <View
          style={{
            backgroundColor: 'pink',
            padding: 10,
            marginTop: 10,
            borderRadius: 8,
          }}
        >
          <Text style={{color: 'red', fontSize: 10}}>{errorMessage}</Text>
        </View>
      ) : null}
      <TouchableOpacity
        style={{alignSelf: 'center', padding: 20}}
        onPress={handleRegister}
      >
        <CustomText>
          Don't have an account?{' '}
          <Text style={{color: Colors.primary}}>Register</Text>
        </CustomText>
      </TouchableOpacity>
    </View>
    </MotiView>
  );
};

export default LoginScreen;

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
});
