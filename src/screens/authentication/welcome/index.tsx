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
    <View style={{flex:1, paddingHorizontal: 20}}>
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../../../assets/images/appIcon.png')} style={{borderRadius: 10}} />
      </View>
      <View style={{flex: 0.5}}>
        <CustomText style={styles.bold}>Welcome to WalkTheIsle!</CustomText>
        <CustomText style={styles.regular}>Join our celebration and be a part of our special day</CustomText>
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