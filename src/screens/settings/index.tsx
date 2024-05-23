import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../utils/themes';
import CustomText from '../../components/CustomText';
import { settingsData } from './_components/settingsData';
import SettingsItem from './_components/settingsItem';
import Logout from './_components/Logout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomTextInput from '../../components/CustomTextInput';
import Custombutton from '../../components/CustomButton';
import { UserContext } from '../../store/Store';

const SettingsScreen = () => {
  const { userDetails, setUserDetails } = useContext<any>(UserContext);

  const [name, setName] = useState(userDetails?.name);
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState(userDetails?.email);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (!name) {
      setErrorMessage('Please enter name');
      return
    }
    if (!phonenumber) {
      setErrorMessage('Please enter valid phone number');
      return
    }
    if (!email) {
      setErrorMessage('Please enter valid email address');
      return
    }
    const emailRegex = /^[\w-.]+@([\w-]+.)+[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter valid email address');
      return;
    }
    setLoading(true)
    const payload = {
      name,
      email,
      phonenumber
    }

    updateLocal(payload)
    setLoading(false)
  }

  const updateLocal = (payload: {}) => {

    const updatedDetails = { ...userDetails, ...payload }
    console.log(updatedDetails, 'Updated')
    setUserDetails(updatedDetails)
  }
  return (
    <>
      <View style={styles.background}>
        <View style={styles.backgroundtop}></View>
      </View>
      <View style={styles.content}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <CustomText style={{ fontSize: 26, color: 'white' }}>Settings</CustomText>
            <Ionicons name="settings-outline" size={30} color={'white'} />
          </View>
          <View style={{ paddingTop: 20 }}>
            <CustomText style={{ color: 'white' }}>{userDetails?.name}</CustomText>
            <CustomText style={{ color: 'white' }}>+234{userDetails?.phonenumber}</CustomText>
          </View>

        </View>
        <View style={styles.list}>
          <CustomTextInput placeholder='Name' placeholderTextColor={'lightgray'} value={name} onChangeText={setName} />
          <CustomTextInput placeholder='Email' placeholderTextColor={'lightgray'} value={email} onChangeText={setEmail} editable={false} />
          <CustomTextInput placeholder='Phone' placeholderTextColor={'lightgray'} phone maxLength={10} value={phonenumber} onChangeText={setPhonenumber} />
          <View style={{ width: '80%', alignSelf: 'center' }}>
            <Custombutton title='Submit' isLoading={false} onPress={handleSubmit} buttonStyles={{ width: 200 }} />
          </View>
          {errorMessage ? 
          <View>
            <Text style={{color: 'red', textAlign:'center'}}>{errorMessage}</Text>
          </View> : 
          null}

          {/* <FlatList
            data={settingsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <SettingsItem item={item} />}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
          /> */}

        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 30 }}>
          <Logout />
        </View>
      </View>
    </>
  )
};

export default SettingsScreen;

const styles = StyleSheet.create({
  background: {
    zIndex: -999,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    backgroundColor: Colors.white
  },
  backgroundtop: {
    flex: 0.4,
    backgroundColor: Colors.primary,
    //zIndex:9
  },
  content: {
    flex: 1,
    marginTop: 10,
    paddingVertical: 40,
    paddingHorizontal: 30
  },
  list: {
    padding: 20,

    backgroundColor: '#f4f6f5',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
    elevation: 3
    // alignItems:'center'
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#333'
  }
});
