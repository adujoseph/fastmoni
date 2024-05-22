import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from 'react-native';
import React from 'react';
import { OnboardingData } from './onboardingData';
import OnboardingPaginator from './onboardingPaginator';
import CustomText from '../../../../components/CustomText';

const OnboardingItem: React.FC<any> = ({ item, data }) => {
  const { width } = useWindowDimensions();
  return (
    <ImageBackground
      source={item.image}
      resizeMode="cover"
      style={{ flex: 1, width, backgroundColor: 'black' }}
    >
      <View style={styles.textwrap}>

        <CustomText style={styles.text}>{item.text}</CustomText>
        <CustomText style={styles.describe}>{item.describe}</CustomText>
      </View>
    </ImageBackground>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  textwrap: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 250,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adding a semi-transparent overlay to improve text readability
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
  },
  describe: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
});
