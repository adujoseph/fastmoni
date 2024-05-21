import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React , {useRef, useState, useCallback, useMemo, useEffect} from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import CustomText from '../../components/CustomText';
import { Colors } from '../../utils/themes';
import ForwardIcon from '../../assets/icons/ForwardIcon';
import { banktransfer, cardtransfer } from '../../utils/constants';

const GiftingScreen = ({navigation}:any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['45%', '60%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
   // handlePresentModalPress();
   // console.log(bottomSheetRef?.current)
  },[])

  const handlePresentModalPress = useCallback(() => {
    if(bottomSheetRef) {
    //  bottomSheetRef?.current?.open();
    }
  }, []);

  const handleClosePress = () => {
    if(bottomSheetRef){
      bottomSheetRef?.current?.close()
    }
  }

  const gotoCard = () =>{
    navigation.navigate(cardtransfer)
  }
  const gotoBabk = () =>{
    navigation.navigate(banktransfer)
  }

  return (
    <View style={styles.container}>
       <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        // enablePanDownToClose={true}
      >
        <BottomSheetView style={styles.contentContainer}>
          <CustomText style={styles.gift}>Gift Couples</CustomText>
          <CustomText style={styles.choose}>Suprise the couple with a thoughtful gift.Choose how you would like to gift the couple</CustomText>
          <TouchableOpacity style={styles.btn} onPress={gotoCard}>
            <CustomText>Card <Text>(quick and secure)</Text></CustomText>
            <ForwardIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={gotoBabk}>
            <CustomText>Bank Transfer <Text>(easy from your bank)</Text></CustomText>
            <ForwardIcon />
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}

export default GiftingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30
  },
  gift:{
    fontSize:18,
    lineHeight: 25.2,
    fontWeight: '700',
    paddingBottom: 10
  },
  choose:{
    fontSize:14,
    lineHeight: 19,
    fontWeight: '500',
    paddingBottom: 10,
    textAlign: 'center'
  },
  btn:{
    backgroundColor: Colors.secondary,
    padding: 20,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    borderRadius: 7
  }
});

