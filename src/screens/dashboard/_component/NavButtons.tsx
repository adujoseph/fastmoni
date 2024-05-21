import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils/themes';
import {useNavigation} from '@react-navigation/native';
import {map} from '../../../utils/constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NavButtons = () => {
  const navigation: any = useNavigation();

  const useDirectionMap = () => {
    navigation.navigate(map);
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.btnInverse} onPress={useDirectionMap}>
        <Text style={styles.textInverse}>Get Direction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Download Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavButtons;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3),
  },
  btnInverse: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(2.5),
    paddingHorizontal: hp(4),
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  textInverse: {
    fontWeight: '600',
    color: Colors.primary,
  },
  text: {
    fontWeight: '600',
    color: '#fff',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(2.5),
    paddingHorizontal: hp(4),
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
});
