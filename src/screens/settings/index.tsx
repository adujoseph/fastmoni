import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../utils/themes';
import CustomText from '../../components/CustomText';
import { settingsData } from './_components/settingsData';
import SettingsItem from './_components/settingsItem';
import Logout from './_components/Logout';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  return (
    <>
      <View style={styles.background}>
        <View style={styles.backgroundtop}></View>
      </View>
      <View style={styles.content}>
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <CustomText style={{fontSize: 26, color: 'white'}}>Settings</CustomText>
            <Ionicons name="settings-outline" size={30} color={'white'} />
          </View>
          <View style={{paddingTop: 20}}>
          <CustomText style={{color:'white'}}>Adebayo Ridwan</CustomText>
          <CustomText style={{color:'white'}}>adebayo_ridwan@gmail.com</CustomText>
          </View>
          
        </View>
        <View style={styles.list}>
          <FlatList
            data={settingsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <SettingsItem item={item} />}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
          />

        </View>
        <View style={{justifyContent:'center', alignItems:'center', padding:30}}>
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
    marginTop: 40,
    paddingVertical: 40,
    paddingHorizontal: 30
  },
  list: {
    padding: 10,
    backgroundColor: '#f4f6f5',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 30,
    elevation: 3
    // alignItems:'center'
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#333'
  }
});
