import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import React, { useEffect } from 'react';
import { login, onboarding } from '../../../utils/constants';
import { Colors } from '../../../utils/themes';

interface SplashScreenProps {
  navigation: any;
  currentLang: string;
}
const Splashscreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      handleRouteOptions();
    });
  }, [navigation, fadeAnim]);

  const handleRouteOptions = async () => {
    navigation.navigate(onboarding);
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../../assets/images/fastLogo.png')}
        style={[styles.logo, { opacity: fadeAnim }]}
      />
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        FastaMoni
      </Animated.Text>
      <Animated.Text style={[styles.textSmall, { opacity: fadeAnim, fontStyle: 'italic' }]}>
        Take ownership of your finances in a new way!
      </Animated.Text>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    backgroundColor:'white',
    borderRadius: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSmall: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '500',
    textAlign: 'center',
  },
});
