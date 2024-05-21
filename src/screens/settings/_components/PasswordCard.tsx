import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import PasswordIcon from '../../../assets/icons/PasswordIcon';
import CustomText from '../../../components/CustomText';
import { Colors } from '../../../utils/themes';
import ForwardIcon from '../../../assets/icons/ForwardIcon';

interface PasswordCardProps {
  onPress: () => void;
}
const PasswordCard = ({onPress}: PasswordCardProps) => {
  return (
    <View style={{marginTop: 20, borderBottomWidth: 1, borderBlockColor: '#ECECEC', paddingBottom: 10}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onPress={onPress}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <PasswordIcon />
          <View>
            <CustomText style={styles.password}>Password</CustomText>
            <CustomText style={styles.secure}>Secure your account</CustomText>
          </View>
        </View>
        <View>
          <ForwardIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordCard;

const styles = StyleSheet.create({
  secure:{
    fontSize: 10,
    lineHeight: 14,
    color:'#ACACAC'
  },
  password:{
    fontSize: 14,
    lineHeight: 20.58,
    color: Colors.primary,
    fontWeight: '700'
  }
});
