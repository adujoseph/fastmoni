import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import Custombutton from '../../../components/CustomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { dash, forgetpassword, register } from '../../../utils/constants';
import { Colors } from '../../../utils/themes';
import PayStack from './Paystack'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CardTransferScreen = ({ navigation }: any) => {
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPay, setShowPay] = useState(false)

  const handlePayment = () => {
    if (!phonenumber) {
      return
    }
    setShowPay(true)
  };
  const handleForgotPass = () => {
    navigation.navigate(forgetpassword);
  };
  const handleSuccess = (e: any) => {
    setShowPay(false)
  }
  const handleError = (e: any) => {
    setShowPay(false)
  }

  return (
    <>{
      showPay ?
        <PayStack amount={phonenumber} email={'adu@gmail.com'} handleSuccess={handleSuccess} handleError={handleError} /> :
        <View style={styles.container}>
          <View style={{ marginTop: hp(11) }}>
            <Text style={styles.continue}>
              Enter a thoughtful amount to gift the happy couple.
            </Text>
          </View>
          <View>
            <CustomTextInput
              label="Enter Amount"
              placeholder="20,000.00"
              value={phonenumber}
              onChangeText={setPhonenumber}
              keyboardType='number-pad'
            />
            <CustomTextInput
              label="Message to couple"
              placeholder="Comment..."
             numberOfLines={4}
              value={password}
              onChangeText={setPassword}
              multiline={true}
              // numberOfLines={5}
              style={{ alignItems: 'flex-start', justifyContent: 'flex-start' , minHeight: hp(14), color:'#333'}}
            />
          </View>

          <Custombutton title="Pay" onPress={handlePayment} />

          <View>
            <Text>
              Note: We prioritize your security. Your card details are never stored
              by us and are protected with industry standard encryption.
            </Text>
          </View>
        </View>
    }</>
  );
};

export default CardTransferScreen;

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
