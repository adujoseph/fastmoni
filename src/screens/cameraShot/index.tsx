import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppState,
  Pressable,
} from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { photoview } from '../../utils/constants';
import {
  useCameraPermission,
  useMicrophonePermission,
  useCameraDevice,
  Camera,
  CameraPosition,
} from 'react-native-vision-camera';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Flash, FlipView, NoAudio, } from './icons';

const CameraShotScreen = () => {
  const navigation: any = useNavigation();
  const isFocused = useIsFocused();
  const appState = AppState.currentState;
  const isActive = isFocused && appState === 'active';
  const camera = useRef<Camera>(null);
  const [cameraType, setCameraType] = useState<CameraPosition>('back');
  const [isPhoto, setIsPhoto] = useState(true);
  const [isAudio, setIsAudio] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [flash, setFlash] = useState<'auto' | 'on' | 'off'>('auto')


  const { hasPermission, requestPermission } = useCameraPermission();
  const { hasPermission: microphonePermission, requestPermission: requestMicrophonePermission } = useMicrophonePermission()
  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }

    if (!microphonePermission) {
      requestMicrophonePermission();
    }
  }, [hasPermission, microphonePermission]);

  const device = useCameraDevice(cameraType);

  const handleSwitchCamera = () => {
    if (cameraType === 'back') {
      setCameraType('front');
    } else {
      setCameraType('back');
    }
  };

  const toggleCameraType = () => {
    setIsPhoto(!isPhoto)
    setIsVideo(!isVideo)
    setIsAudio(!isAudio)
  }

  const takePhotos = async () => {
    const photo = await camera.current?.takePhoto({
      flash: flash
    });
    navigation.navigate(photoview, { photo });
  };

  const takeVideos = () => {
    console.log('video');
    // setIsPhoto(!isPhoto);
  }

  const toggleFlash = () => {
    if (flash === 'on') {
      setFlash('off')
    } else {
      setFlash('on')
    }
  }
  const startRecording = async () => {
    const video = await camera.current?.startRecording({
      onRecordingFinished: (video) => console.log(video),
      onRecordingError: (error) => console.error(error)
    })
  };

  const stopRecording = async () => {
    await camera.current?.stopRecording()
  }

  if (!hasPermission) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <Text>No Permission</Text>
      </View>
    );
  }
  if (device == null) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <Text>No Camera on this device</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        photo={isPhoto}
        video={isVideo}
        audio={isAudio}
        ref={camera}
      />
      <View style={styles.options}>
        <Flash onPress={toggleFlash} isActive={flash === 'on' ? true : false} />
        <FlipView onPress={handleSwitchCamera} isActive={flash === 'on' ? true : false} />
        <NoAudio onPress={handleSwitchCamera} isActive={flash === 'on' ? true : false}/>
      </View>
      <View style={styles.float}>
        <Pressable style={[styles.press, { backgroundColor: isPhoto ? 'white' : 'red' }]} onPress={takePhotos} onLongPress={takeVideos}>
          <View />
        </Pressable>
      </View>
    </View>
  );
};

export default CameraShotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'cyan',
    marginBottom: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  options: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.3)',
    borderRadius: 10,
    top: 20,
    right: 20,
    // height: 100,
    padding: 5,
  },
  float: {
    position: 'absolute',
    bottom: 30,
    zIndex: 9999999,
    borderRadius: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'gray',
    width: '100%',
    padding: 10,
  },
  press: {
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 5,
    borderColor: 'gray',
  },
});
