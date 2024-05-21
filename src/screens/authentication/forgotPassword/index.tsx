import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import Custombutton from '../../../components/CustomButton';
import {Colors} from '../../../utils/themes';
import {dash, otp} from '../../../utils/constants';
import CustomText from '../../../components/CustomText';

const ForgotPasswordScreen = ({navigation}: any) => {
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    navigation.navigate(otp)
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: 80}}>
        <CustomText style={styles.login}>Forgot Password</CustomText>
        <CustomText style={styles.continue}>
          Don’t worry! it occurs. Kindly enter your registered phone number.
        </CustomText>
      </View>
      <View style={{marginTop: 20}}>
        <CustomTextInput
          label="Phone Number"
          placeholder="09034883109"
          value={phonenumber}
          onChangeText={setPhonenumber}
        />
      </View>

      <Custombutton title="Continue" onPress={handleSubmit} />
    </View>
  );
};

export default ForgotPasswordScreen;

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
