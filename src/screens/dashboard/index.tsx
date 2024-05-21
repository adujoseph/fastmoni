import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Countdown from '../../components/CountdownComponent';
import MeetCouple from './_component/MeetCouple';
import Custombutton from '../../components/CustomButton';
import NavButtons from './_component/NavButtons';
import {data} from './_component/AddressTicketData';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Address from './_component/Address';
import Ticket from './_component/Ticket';
import { Colors } from '../../utils/themes';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomText from '../../components/CustomText';

const DashboardScreen = () => {
  const [selectedOption , setSelectedOption] = useState<any>(1);

  const handleSelectView = (item: any) => {
    setSelectedOption(item.id)
  }
  const HandleView = () => {
    return (
      <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
        {data.map((d, i) => (
            <View style={{flex: 0.5}} key={i}>
              <TouchableOpacity onPress={() => handleSelectView(d)} style={[styles.btn, selectedOption === d.id ? styles.active : styles.inactive ]}>
                <CustomText style={{color: selectedOption === d.id ? Colors.primary : '#CBCBCB'}}>{d.name}</CustomText>
              </TouchableOpacity>
            </View> 
        ))}
      </View>
    );
  };

 
  return (
    <ScrollView style={styles.container}>
      <Countdown targetDate="2024-06-01" />
      <MeetCouple />
      <HandleView />
      <View style={{marginTop: hp(2.5)}}>
       {selectedOption === 1 ? <Address /> : <Ticket />}
      </View>
      {/* <NavButtons /> */}
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: hp(2.5),
    backgroundColor: '#F7FAFC',
  },
  btn:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(1)
  },
  active:{
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary
  },
  inactive:{
    borderBottomWidth: 1,
    borderBottomColor: '#CBCBCB'
  },
});
