import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel from 'react-native-reanimated-carousel';
import { imageList } from './ImageList';

const MeetCouple = () => {
  const width = Dimensions.get('window').width;
  const imageWidth = width -55
  return (
    <View style={{ marginTop: 20, width: '100%'}}>
      <Text style={{ textAlign: 'center', fontSize: 21, color: '#000000', fontWeight: '800' }}>WalkTheAisle with us</Text>
      <Carousel
        loop
        width={imageWidth}
        height={hp(25)}
        autoPlay={true}
        data={imageList}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => null}
        renderItem={({ item, index }) => (
          <View style={{ height: hp(23), justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginTop: hp(1.5), marginRight: 5 }}>
            <Image source={item?.image} style={{ height: hp(23), width: '100%', borderRadius: 10 }} />
          </View>
        )}
      />


    </View>
  )
}

export default MeetCouple

const styles = StyleSheet.create({})