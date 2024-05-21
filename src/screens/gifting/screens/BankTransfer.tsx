import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils/themes';
import CustomText from '../../../components/CustomText';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';
import { useToast } from '../../../hooks/useToast';

const BankTransfer = () => {
  const showToast = useToast();
  const handleCopy = () => {
    let number = '2017164294';
    Clipboard.setString(number); 
    showToast('Copied','success', 3000)
  }
  return (
    <View style={styles.container}>
      <View style={{marginTop : Platform.OS === 'ios'? hp(7) : hp(4)}}>
        <CustomText style={styles.text}>
          You can gift the couple by transferring into the
          Bank details below.
        </CustomText>
      </View>

      <View style={styles.card}>
        <CustomText style={styles.bank}>Kuda Bank</CustomText>
        <Pressable onPress={handleCopy}>
          <CustomText style={styles.number}>2017164294 <Ionicons name="copy-outline"  size={20} color='gray'/></CustomText>
        </Pressable>
        <CustomText style={styles.bank}>Zion Ajibodu</CustomText>
      </View>

      <View>
        <CustomText style={styles.steps}>Steps to make transfer</CustomText>
      </View>
      <View>
        <CustomText style={styles.text}>Copy couple’s “Account Number” above.</CustomText>
        <CustomText  style={styles.text}>Open your bank app and “Paste Account Number”.</CustomText>
        <CustomText  style={styles.text}>Input the “Amount” you want to gift the couple.</CustomText>
      </View>
    </View>
  );
};

export default BankTransfer;

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 70,
        paddingHorizontal: 20
    },
  card: {
    padding: 20,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  steps:{
    fontSize: 14,
    lineHeight: 19,
    color: Colors.black,
    paddingBottom: 20,
    paddingTop: 15,
    fontWeight: '900'
  },
  text:{
    fontSize: 14,
    lineHeight: 19,
    color: Colors.black,
    paddingBottom: 20
  },
  bank:{
    fontSize: 16,
    lineHeight: 22.4,
    color: Colors.black,
    paddingBottom: 20
  },
  number:{
    fontSize: 28,
    lineHeight: 39,
    color: Colors.primary,
    paddingBottom: 20,
    fontWeight: '900'
  }
});
