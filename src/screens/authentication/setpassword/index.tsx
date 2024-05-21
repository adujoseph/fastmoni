import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    Platform,
  } from 'react-native';
  import React, { useState } from 'react';
  import {ScrollView} from 'react-native-gesture-handler';
  import Custombutton from '../../../components/CustomButton';
  import CustomTextInput from '../../../components/CustomTextInput';
  import {authsuccess, setpassword} from '../../../utils/constants';
import { createUser } from '../../../services/Authentication';
import CustomText from '../../../components/CustomText';
  
  const RegisterScreen = ({navigation, route}: any) => {
    const {payload} = route.params;
    const [errorMessage, setErrorMessage] = useState("");
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
      if(!password){
        setErrorMessage('Enter Password')
        return
      }
      if(!confirmpassword){
        setErrorMessage('Enter Confirm Password')
        return
      }
      if(password !== confirmpassword){
        setErrorMessage("password does not match")
        return
      }
      setLoading(true)
      payload.password = password;
      payload.role = 'user'
      console.log(payload)
      const response = await createUser(payload)
      console.log(response)
      if(response?.status === 201){
        navigation.navigate(authsuccess, {data: response?.data});
      } else {
        setErrorMessage(response.message)
      }
      setLoading(false)
    };
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboard}
        >
          <View>
            <CustomText style={styles.register}>Create Your Password</CustomText>
            <CustomText style={styles.info}>Secure your account with a strong password.</CustomText>
            <CustomTextInput label="Password" secureTextEntry value={password} onChangeText={setPassword}/>
            <CustomTextInput label="Confirm Password" secureTextEntry value={confirmpassword} onChangeText={setConfirmPassword}/>
            <Custombutton title="continue" onPress={handleSubmit} isLoading={loading} />
            {errorMessage ? (
              <View
                style={{
                  backgroundColor: 'pink',
                  padding: 10,
                  marginTop: 10,
                  borderRadius: 8,
                }}
              >
                <Text style={{color: 'red', fontSize: 10}}>{errorMessage}</Text>
              </View>
            ) : null}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  };
  
  export default RegisterScreen;
  
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