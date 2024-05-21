import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Animated,
  ViewToken,
} from 'react-native';
import React, {useRef, useState, RefObject} from 'react';
import {data} from './_components/onboardingData';
import OnboardingItem from './_components/onboardingItem';
import OnboardingButton from './onboardingButton';
import OnboardingPaginator from './_components/onboardingPaginator';
import { login, welcome } from '../../../utils/constants';

const OnboardingScreen = ({navigation}: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      setCurrentIndex(viewableItems[0]?.index);
    },
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollEffect = () => {
    if(currentIndex < data.length - 1){
        slideRef?.current?.scrollToIndex({index: currentIndex + 1})
    } else {
        navigation.navigate(welcome)
    }
  }

  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => <OnboardingItem item={item} data={data} />}
          keyExtractor={item => item.id.toString()}
          horizontal
          pagingEnabled
          snapToStart
          bounces={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
        <View style={styles.dot}>
          <OnboardingPaginator data={data} scrollX={scrollX} />
        </View>
        <OnboardingButton onPress={scrollEffect} percentage={(Number(currentIndex) + 1) * (100 / data.length)}/>
      </View>
    </>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    top: '55%',
    alignSelf: 'center',
  },
});
