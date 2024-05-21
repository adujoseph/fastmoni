import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';

interface ListProps {
  parameter: string;
  value: string;
}
const ListItem = ({parameter, value}: ListProps) => {
  return (
    <View style={{marginTop: 20}}>
      <CustomText style={styles.parameter}>{parameter}:</CustomText>
      <CustomText style={styles.value}>{value}</CustomText>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
    parameter:{
       color: '#ACACAC',
       fontSize: 12,
       fontWeight: '500',
    },
    value:{
        color: '#000000',
        fontSize: 14,
        fontWeight: '700',
     }
});
