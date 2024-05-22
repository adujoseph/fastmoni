import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Pressable
} from 'react-native';
import React, { useContext } from 'react';
import { Colors } from '../../utils/themes';
import Avatar from '../../components/Avatar';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from './_components/ListItem';
import PasswordCard from './_components/PasswordCard';
import CheckStatus from './_components/CheckStatus';
import CustomText from '../../components/CustomText';
import { login, register } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import CheckSteps from './_components/StepsIndicator';
import { UserContext } from '../../store/Store';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { height } = Dimensions.get('screen');

const UserScreen = () => {
  const navigation: any = useNavigation();
  const passwordChange = () => { };

  const handleLogout = () => {
    navigation.navigate(login)
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topview}>
        <CustomText style={styles.profile}>Profile</CustomText>
        <Avatar imageUrl='https://reactnative.dev/img/tiny_logo.png' />
      </View>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.content}
      >
        
        <ListItem parameter="Name" value={''} />
        <ListItem parameter="Phone Number" value={''} />
        <ListItem parameter="Email" value={''} />
        <PasswordCard onPress={passwordChange} />
        <Pressable onPress={handleLogout} style={styles.logoutBtn}>
          <Text style={styles.logouttext}>Logout</Text>
        </Pressable>
      </ScrollView>
    </ScrollView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // zIndex: 9999999999,
  },
  topview: {
    backgroundColor: Colors.primary,
    padding: hp(2.5),
    minHeight: height * 0.3,
    borderBottomLeftRadius: hp(4),
    borderBottomRightRadius: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(5)
    // zIndex: 999,
  },
  profile: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700'
  },
  scrollview: {
    paddingHorizontal: hp(3),
    paddingVertical: hp(4),
  },
  content: {
    flex: 1,
  },
  logoutBtn: {
    padding: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: hp(1)
  },
  logouttext: {
    color: 'white'
  }
});
