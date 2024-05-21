import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from './themes'



export const globalStyles = StyleSheet.create({
 primary_regular: {
    //fontFamily: 'Poppins-Regular',
    color: 'green'
 },
 regular:{
    //fontFamily: 'Poppins-Regular',
    color: 'gray'
 },
 regular_bold: {
   //fontFamily: 'Poppins-Bold',
   color: '#1C1D21',
   fontSize: 18,
   lineHeight: 27
 },
 text_sign_out: {
   //fontFamily: 'Poppins-Regular',
   color: '#FF3B30',
   fontSize: 14,
   lineHeight: 16.8
 },
 text_bottom_nav: {
   //fontFamily: 'Poppins-Bold',
   color: Colors.primary,
   fontSize: 14,
   lineHeight: 16.8
 },
 normalText:{}, 
 extraSmallText:{},
})