import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';

const CheckStatus = () => {
  return (
    <View>
      <View>
        <CustomText style={styles.status}>Check in Status</CustomText>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <CustomText>Invited</CustomText>
        <CustomText>Registered</CustomText>
        <CustomText>Checked-in</CustomText>
      </View>
    </View>
  );
};

export default CheckStatus;

const styles = StyleSheet.create({
  status: {
    color: '#666666',
    fontWeight: '700',
    paddingBottom: 10
  },
});
