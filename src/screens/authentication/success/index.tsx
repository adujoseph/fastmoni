import { Image, Pressable, StyleSheet, Platform,PermissionsAndroid, Text, View, Alert } from 'react-native';
import React from 'react';
import Congratulations from '../../../assets/svg/Congratulations';
import DownloadIcon from '../../../assets/icons/DownloadIcon';
import { Colors } from '../../../utils/themes';
import { login } from '../../../utils/constants';
import { saveQRCode, saveQRCode_ } from '../../../utils/saveAssets';
import { useToast } from '../../../hooks/useToast';
import CustomText from '../../../components/CustomText';
import RNFetchBlob from 'rn-fetch-blob'




const SuccessScreen = ({ navigation, route }: any) => {
  const showToast = useToast();
  const {
    data: {
      data: { qrCodeUrl, token, tableId, inviteCode, name },
    },
  } = route.params;
  const handleLogin = () => {
    navigation.navigate(login);
  };

  const downloadQrcode = async () => {
   const filepath = await saveQRCode(qrCodeUrl);
   if(filepath) showToast('Saved successfully', 'success', 5000)
  }

  const downloadQrcode_ = async () => {
     const result = await saveQRCode_(qrCodeUrl)
    if(result) showToast('QRcode saved','success', 5000)
   }


  const saveImage_ = async () => {
    // Request storage permission on Android if needed
    const { config, fs } = RNFetchBlob
    // if (Platform.OS === 'android') {
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //   );
    //   if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
    //     console.error('Storage permission denied');
    //     return;
    //   }
    // }
    
  
    try {
      const date = new Date();
      const dirPath = Platform.OS === 'ios' ? `${fs.dirs.LibraryDir}/<folder-name>` : `${fs.dirs.PictureDir}`;
      const filePath = `${dirPath}/${Math.floor(date.getTime() + date.getSeconds() / 2)}.png`;
      await fs.writeFile(filePath, qrCodeUrl, 'base64');
      if (Platform.OS === 'ios') {
        await RNFetchBlob.ios.previewDocument(filePath);
      } else {
        await RNFetchBlob.fs.scanFile([
          { path: filePath, mime: 'image/png' },
        ]);
      }
      showToast('Saved successfully', 'success', 5000)
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  // const saveImage = async () => {
  //   //  await permission()
  //   let date = new Date();
  //   const { config, fs } = RNFetchBlob
  //   const dirPath = Platform.OS == 'ios' ? `${fs.dirs}/<folder-name>` : `${fs.dirs.PictureDir}`
  //   const filePath = dirPath + '/' + Math.floor(date.getTime() + date.getSeconds() / 2) + '.png'
  //   fs.writeFile(filePath, qrCodeUrl, 'base64').then(res => {
  //     Platform.OS === 'ios' ?
  //       RNFetchBlob.ios.previewDocument(filePath) :
  //       RNFetchBlob.fs.scanFile([
  //         { path: filePath, mime: 'image/png' },
  //       ])

  //   }
  // }
  const NameDisplay = ({ name, value }: any) => {
      return (
        <View style={{ flexDirection: 'row' }}>
          <CustomText style={{ width: 60, color: '#333', fontWeight: '700' }}>
            {name}
          </CustomText>
          <CustomText>{value}</CustomText>
        </View>
      );
    };
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/ballon.gif')}
          style={styles.image}
        />
        <CustomText style={styles.congratulations}>Congratulations!</CustomText>
        <CustomText style={styles.subtext}>You're now part of our wedding celebration</CustomText>
        <View style={styles.cardwrap}>
          <View style={styles.cardrow}>
            <View style={styles.card}>
              <NameDisplay name="Name" value={name} />
              <NameDisplay name="Code" value={inviteCode} />
              <NameDisplay name="Table" value={tableId} />
            </View>
            <View style={styles.card}>
              <Image style={{ width: 80, height: 80 }} source={{ uri: qrCodeUrl }} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 50,
            justifyContent: 'space-between',
            width: '90%',
            alignItems: 'center',
          }}
        >
          <Pressable onPress={downloadQrcode_}>
            <DownloadIcon />
          </Pressable>
          <Pressable onPress={handleLogin} style={styles.btn}>
            <CustomText style={styles.btntext}>Continue To Log in</CustomText>
          </Pressable>
        </View>
      </View>
    );
  };

  export default SuccessScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      //justifyContent:'center',
      alignItems: 'center',
    },
    congratulations: {
      fontWeight: '700',
      fontSize: 18,
      color: '#000000',
    },
    subtext: {
      fontWeight: '400',
      fontSize: 16,
      color: '#000000',
    },
    cardrow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
    },
    btn: {
      backgroundColor: Colors.primary,
      padding: 10,
      borderRadius: 8,
      flex: 0.9,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btntext: {
      color: '#fff',
    },
    cardwrap: {
      marginTop: 20,
    },
    card: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#fff',
    },
    image: {
      marginTop: 40,
      width: 250,
      height: 250,
      resizeMode: 'contain',
    },
  });
