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
    if (!phonenumber || phonenumber.length > 10) {
      setErrorMessage('Enter valid phone numer');
      return;
    }
    if (!password) {
      setErrorMessage('Enter password field');
      return;
    }
    setLoading(true);
    const payload = {
      password,
      phone: `234${phonenumber}`,
    };

    const response = await signinUser(payload);
    if (response?.status === 200) {
      setUserDetails(response.data)
      navigation.replace(dash);
      setLoading(false);
    } else {
      setErrorMessage(response.message)
    }
    if(response?.error) setErrorMessage(response?.error)
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
        <CustomText style={styles.login}>Log in to Our Wedding App</CustomText>
        <CustomText style={styles.continue}>Join our celebration and access exclusive content</CustomText>
      </View>
      <View>
        <CustomTextInput
          placeholder="Phone number"
          value={phonenumber}
          onChangeText={setPhonenumber}
          phone
          keyboardType="number-pad"
          maxLength={10}
        />
        <CustomTextInput
          placeholder="Password"
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
