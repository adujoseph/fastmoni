import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import Custombutton from '../../../components/CustomButton'
import { login, phoneAuth, register } from '../../../utils/constants'
import { StackNavigationProp } from '@react-navigation/stack';
import CustomText from '../../../components/CustomText';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  PhoneAuth: undefined;
  Register: undefined
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;


type Props = {
  navigation:  WelcomeScreenNavigationProp
};

const Welcome:React.FC<Props> = ({navigation}) => {
    const handleSignin = () => {
        navigation.navigate(login)
    }
    const handleSignup = () => {
       navigation.navigate(phoneAuth)
    }
  return (
    <View style={{flex:1, paddingHorizontal: 20, justifyContent:'center', alignItems:'center'}}>
     
      <View>
        <CustomText style={styles.bold}>Welcome to Fastamoni!</CustomText>
        <CustomText style={styles.regular}> Take ownership of your finances in a new way!</CustomText>
        <View>
            <Custombutton title='Register Now' onPress={handleSignup} />
            <Custombutton title="Log In" inverse  onPress={handleSignin}/>
        </View>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    bold: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 20,
        lineHeight: 29,
        color:'#000000'
    },
    regular:{
        textAlign: 'center',
        fontWeight: '400' ,
        fontSize: 15,
        lineHeight: 22.4,
        color:'#000000',
        paddingTop: 20
    }
})