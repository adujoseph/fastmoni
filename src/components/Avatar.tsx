import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  Text,
  StyleSheet,
} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {Colors} from '../utils/themes';
import CustomText from './CustomText';

interface ProfileImageProps {
  imageUrl: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({imageUrl}) => {
  const [image, setImage] = useState<any>(imageUrl);

  const selectImageFromGallery = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
       maxWidth: 200,
      maxHeight: 200,
    };

    const response: any = await launchImageLibrary(options);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response?.errorCode) {
      console.log('ImagePicker Error: ', response?.error);
    }  else {
      console.log(response.assets[0].uri)
      setImage(response.assets[0].uri);
    }
  };

  return (
    <View style={{paddingVertical: 30}}>
      <TouchableOpacity onPress={selectImageFromGallery}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
         
            width: 120,
            height: 120,
            borderRadius: 70,
            borderWidth: 1,
            borderColor: Colors.white,
          }}
        >
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={{paddingTop: 10}}>
          <CustomText style={{color: Colors.white}}>Change Picture</CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
     resizeMode: 'cover',
     borderWidth: 1,
     borderColor: Colors.white,
    ...StyleSheet.absoluteFillObject,
  },
});
