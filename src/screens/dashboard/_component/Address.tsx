import { StyleSheet, Text, View, Dimensions, Pressable, Image, ImageBackground } from 'react-native';
import React from 'react';
import LocationIcon from '../../../assets/icons/Location';
import { useNavigation } from '@react-navigation/native';
import { map } from '../../../utils/constants';
import { Colors } from '../../../utils/themes';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Address = () => {

  const navigation: any = useNavigation();

  const gotoMaps = () => {
    navigation.navigate(map);
  };
  return (
    <>
    
      <ImageBackground source={require('../../../assets/images/mapcover.png')} style={styles.image} resizeMode='cover' resizeMethod='resize'>
        <View style={styles.box}>
          <LocationIcon color="#fff" />
          <Text style={styles.textWhite}> L.J. Dosumu Street, Agidingbi, Ikeja 101233, Lagos</Text>
        </View>
      </ImageBackground>
      <Pressable onPress={gotoMaps} style={styles.bottom}>
        <Text style={styles.text}>View Event Location</Text>
      </Pressable>
    </>
  );
};

export default Address;

const styles = StyleSheet.create({
  top: {
    //backgroundColor: 'lightgray',

  },
  image: {
    padding: hp(2.5),
    borderTopLeftRadius: hp(2.5),
    borderTopRightRadius: hp(2.5),
    height: hp(16),
    backgroundColor: '#3F3F3F'
  },
  bottom: {
    backgroundColor: '#fff',
    padding: hp(2),
    borderBottomLeftRadius: hp(2.5),
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textWhite: {
    color: Colors.white,
    fontSize: 16,
    paddingLeft: hp(2),
  },
  text: {
    color: Colors.primary,
    fontSize: 16
  }
});
