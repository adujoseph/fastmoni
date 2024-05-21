import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  Platform,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {useToast} from '../hooks/useToast';

export const savePhoto = async (photo: any) => {
  if (!photo) return;
  await CameraRoll.saveAsset(`file://${photo.path}`, {
    type: 'photo',
    album: 'WalkTheAisle',
  });
  Alert.alert('Asset Saved in WalkTheAisle Album');
};

export const saveVideo = async (video: any) => {
  if (!video) return;
  await CameraRoll.saveAsset(`file://${video.path}`, {
    type: 'video',
    album: 'WalkTheAisle',
  });
  Alert.alert('Asset Saved in WalkTheAisle Album');
};

export const saveQRCode_ = async (base64Image: any) => {
  if (!base64Image) {
    return;
  }
  try {
    let Base64Code = base64Image.split('data:image/png;base64,'); 
    const dirs = RNFetchBlob.fs.dirs;
    let path = dirs.DCIMDir + '/invite_qrcode.png';
    RNFetchBlob.fs.writeFile(path, Base64Code[1], 'base64').then((res: any) => {
      console.log('File : ', res);
    });
    return path;
  } catch (err) {
    console.log('error: ', err);
    return null;
  }
};

export const saveQRCode = async (qrCodeUrl: string) => {
  const {config, fs} = RNFetchBlob;
  // const showToast = useToast()
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
    const dirPath =
      Platform.OS === 'ios'
        ? `${fs.dirs.LibraryDir}/walktheaisle`
        : `${fs.dirs.PictureDir}`;
    const filePath = `${dirPath}/${Math.floor(
      date.getTime() + date.getSeconds() / 2,
    )}.png`;

    await fs.writeFile(filePath, qrCodeUrl, 'base64');

    if (Platform.OS === 'ios') {
      await RNFetchBlob.ios.previewDocument(filePath);
    } else {
      await RNFetchBlob.fs.scanFile([{path: filePath, mime: 'image/png'}]);
    }
    return filePath;
  } catch (error) {
    console.error('Error saving image:', error);
    return null;
  }
};
