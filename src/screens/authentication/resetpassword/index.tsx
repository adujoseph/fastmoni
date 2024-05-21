import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    Platform,
  } from 'react-native';
  import React from 'react';
  import {ScrollView} from 'react-native-gesture-handler';
  import Custombutton from '../../../components/CustomButton';
  import CustomTextInput from '../../../components/CustomTextInput';
  import {authsuccess, setpassword} from '../../../utils/constants';
  import CustomText from '../../../components/CustomText';
  
  const ResetPassword = ({navigation}: any) => {
    const handleSubmit = () => {
      navigation.navigate(authsuccess);
    };
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboard}
        >
          <View>
            <CustomText style={styles.register}>Reset password</CustomText>
            <CustomText style={styles.info}>Set your unique password to access your account to carry out your daily activities.</CustomText>
            <CustomTextInput label="Password" secureTextEntry/>
            <CustomTextInput label="onfirm password" secureTextEntry/>
            <Custombutton title="continue" onPress={handleSubmit} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  };
  
  export default ResetPassword;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    content: {flexGrow: 1},
    keyboard: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      // backgroundColor: '#fff',
    },
    register: {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 26,
      color:'#333'
    },
    info: {
      fontSize: 14,
      lineHeight: 19,
      color:'#333',
      paddingBottom: 15
    },
  });