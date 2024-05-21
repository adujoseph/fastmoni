import { StyleSheet, Text, View, FlatList, Image, ImageProps, Pressable, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { imageList } from '../dashboard/_component/ImageList';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useToast } from '../../hooks/useToast';
import { Colors } from '../../utils/themes';
import { useNavigation } from '@react-navigation/native';
import { photoview } from '../../utils/constants';
import DownloadIcon from '../../assets/icons/DownloadIcon';
import UploadIcon from '../../assets/icons/UploadIcon';
import CustomText from '../../components/CustomText';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Icons from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

interface ImageProp {
  item: {
    id: string;
    image: ImageProps;
  }
}
const { width } = Dimensions.get('window');
const imageWidth = (width / 3) - 10;

const GalleryScreen = () => {
  const navigation: any = useNavigation()
  const showToast = useToast()
  const [isFull, setIsFull] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState()


  const savePhoto = async () => {
    // await CameraRoll.saveAsset(`file://${photo.path}`, {
    //   type: 'photo',
    // });
    // showToast('Asset Saved ', 'success', 5000);
    showToast('This feature is disabled for your user, contact admin ', 'error', 5000)
  };

  const handleImageDetail = (item: any) => {
    setIsFull(true)
    setImageUrl(item);
    // navigation.navigate(photoview, { photo: item });
  }

  const renderItem = ({ item }: ImageProp) => (
    <Pressable onPress={() => handleImageDetail(item.image)}>
      <Image source={item.image} style={styles.image} />
    </Pressable>
  );

  const emptyListItem = () => (
    <View style={{justifyContent:'center', alignItems: 'center', flex:1}}>
      <View style={{marginTop: hp(12)}}>
        <MaterialIcon name="delete-empty-outline" size={60} color={Colors.primary} />
      </View>
      <CustomText>Image Gallery is Empty</CustomText>
    </View>
  );

  const handleImageUpload = () => {
    showToast('This feature is disabled for your user, contact admin ', 'error', 5000)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      { isFull ?
          <>
            <Image source={imageUrl} style={{ ...StyleSheet.absoluteFillObject }} />
            <View style={styles.bottom}>
              <Pressable onPress={() => setIsFull(false)}>
                <Icons name="return-up-back" size={40} color={Colors.primary} />
              </Pressable>
              <Pressable style={styles.big} onPress={savePhoto}>
                <CustomText style={styles.upload}>Download</CustomText>
              </Pressable>
            </View>
          </>
          :
          <>
            <FlatList
              //data={imageList}
              data={[]}
              renderItem={renderItem}
              numColumns={3}
              keyExtractor={item => item.id}
              columnWrapperStyle={styles.columnWrapper}
              ListEmptyComponent={emptyListItem}
            />
          </>
      }
      <Pressable onPress={handleImageUpload} style={styles.floating}>
        <CustomText style={styles.text}>{isFull ? 'V' : '+'}</CustomText>
      </Pressable>
    </View>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    margin: 3,
    borderRadius: 8
  },
  columnWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  floating: {
    width: hp(5),
    height: hp(5),
    borderRadius: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: Colors.primary
  },
  text: {
    color: '#fff',
    fontSize: 30
  },
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
