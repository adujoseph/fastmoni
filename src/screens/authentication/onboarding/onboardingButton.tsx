import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import OnboardingButtonIcon from '../../../assets/icons/OnboardingButton';
import Svg, {G, Circle} from 'react-native-svg';
import { Colors } from '../../../utils/themes';

interface ButtonProps {
  percentage: number;
  onPress: () => void;
}
const OnboardingButton: React.FC<ButtonProps> = ({percentage, onPress}) => {
  const size = 98;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressRef = useRef<Circle | null>(null);
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(val => {
      const strokeDashoffset =
        circumference - (circumference * val.value) / 100;
      if (progressRef.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [percentage]);
  return (
    <View style={styles.button}>
      <Svg width={size} height={size}>
        <G rotation={-90} origin={center}>
          <Circle
            stroke={'#f4f6f5'}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            //stroke={'#810A82'}
            stroke={Colors.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <OnboardingButtonIcon color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    
    // bottom: 60,
    // alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
