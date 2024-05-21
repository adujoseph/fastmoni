import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import React, { useContext } from 'react';
import QRCodeSample from '../../../assets/svg/QRcodeSample';
import {Colors} from '../../../utils/themes';
import { UserContext } from '../../../store/Store';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { saveQRCode, saveQRCode_ } from '../../../utils/saveAssets';
import { useToast } from '../../../hooks/useToast';
import CustomText from '../../../components/CustomText';

interface ViewAreaProps {
  property: string;
  value: string;
}

const {width} = Dimensions.get('screen');
const Ticket = () => {
  const showToast = useToast();
  const{ userDetails : {profile :{name, email, phone, accessCode, table,qrCodeUrl }}} = useContext<any>(UserContext);
  const ViewArea = ({property, value}: ViewAreaProps) => {
    return (
      <View style={{flexDirection: 'row', padding: 5}}>
        <CustomText style={{width: width * 0.25}}>{property}</CustomText>
        <CustomText>{value}</CustomText>
      </View>
    );
  };
  const DownloadQRcode = async () => {
   const result = await saveQRCode_(qrCodeUrl)
   if(result) showToast('QRcode saved','success', 5000)
  }
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: Colors.white,
          padding: hp(1.5),
          borderRadius: hp(1.5),
          borderWidth: 0.5,
          borderColor:'lightgray',
          marginBottom: hp(2.5),
        }}
      >
        <View>
          <ViewArea property="Name" value={name ?? ''} />
          <ViewArea property="Code" value={accessCode ?? ''} />
          <ViewArea property="Table" value={table ?? ""} />
        </View>
        <View>
        <Image style={{width: 80, height: 80}} source={{uri: qrCodeUrl}} />
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={DownloadQRcode}>
        <Text style={styles.text}>Download Ticket</Text>
      </TouchableOpacity>
    </>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    color: '#fff',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
});
