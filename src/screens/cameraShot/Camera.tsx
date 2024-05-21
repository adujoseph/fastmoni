import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import React from 'react';
import CustomText from '../../components/CustomText';
import { Colors } from '../../utils/themes';
import CancelIcon from '../../assets/icons/CancelIcon';
import DownloadIcon from '../../assets/icons/DownloadIcon';
import UploadIcon from '../../assets/icons/UploadIcon';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { useToast } from '../../hooks/useToast';

const Camera = ({ route, navigation }: any) => {
  const { photo } = route.params;
  const showToast = useToast();



  const uploadPhoto = async () => {
    showToast('This feature is disabled for your user, please contact admin','error', 5000)
    if (!photo) return;
    const result = await fetch(`file//${photo.path}`);
    const data = result.blob;
  };

  const savePhoto = async () => {
    if (!photo) return;
    await CameraRoll.saveAsset(`file://${photo.path}`, {
      type: 'photo',
    });
    showToast('Asset Saved ', 'success', 5000);
  };

  const routeToCamera = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1 }}>
      <Pressable style={styles.cancel} onPress={routeToCamera}>
        <CancelIcon />
      </Pressable>
      {photo ? <Image source={{ uri: `file://'${photo?.path}` }} style={StyleSheet.absoluteFill} /> : null}
      <View style={styles.bottom}>
        <Pressable style={styles.small} onPress={savePhoto}>
          <DownloadIcon />
        </Pressable>
        <Pressable style={styles.big} onPress={uploadPhoto}>
          <CustomText style={styles.upload}>Upload</CustomText>
          <UploadIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  cancel: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 99999,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#CCCCCC',
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: 0,
    left: 0,
    zIndex: 9999,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    height: 102,
    flex: 1,
  },
  small: {
    padding: 5,
    backgroundColor: '#fff',
    height: 50,
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  big: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    height: 50,
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  upload: {
    color: '#fff',
    marginRight: 10,
    fontSize: 16,
    lineHeight: 23.52,
    fontWeight: '600',
  },
});
