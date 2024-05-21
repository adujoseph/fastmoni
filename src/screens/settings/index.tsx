import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UserScreen from './UserScreen';
import AdminScreen from './AdminScreen';

const SettingsScreen = () => {
  const [userType, setUserType] = useState('user');
  return <>{userType === 'user' ? <UserScreen /> : <AdminScreen />}</>;
};

export default SettingsScreen;

const styles = StyleSheet.create({});
