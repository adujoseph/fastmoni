import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');
const OnboardingPaginator = ({data, scrollX}: any) => {
  return (
    <View style={styles.paginator}>
      {data.map((_: any, i: any) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10,20,10],
            extrapolate: 'clamp'
        })
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3,1,0.3],
            extrapolate: 'clamp'
        })
        return (
          <Animated.View style={[styles.dots, {width: dotWidth, opacity}]} key={i.toString()} />
        );
      })}
    </View>
  );
};

export default OnboardingPaginator;

const styles = StyleSheet.create({
  paginator: {
    flexDirection: 'row',
    height: 30,
  },
  dots: {
    height: 10,
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: 'white',
  },
});
