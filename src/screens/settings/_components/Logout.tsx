import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText'
import { useNavigation } from '@react-navigation/native'
import { login, phoneAuth } from '../../../utils/constants'

const Logout = () => {
 const navigation:any = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate(login)}>
      <CustomText style={{color:'red'}}>Logout</CustomText>
    </Pressable>
  )
}

export default Logout

const styles = StyleSheet.create({})