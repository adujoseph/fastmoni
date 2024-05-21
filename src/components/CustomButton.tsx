import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ActivityIndicator,
    TextStyle,
  } from 'react-native';
  import React from 'react';
import { Colors } from '../utils/themes';
  
  interface AuthScreenProps {
    title?: string;
    disable?: boolean;
    isLoading?: boolean;
    inverse?: boolean;
    textStyles?: TextStyle
    onPress?: () => void;
  }
  
  const {width, height} = Dimensions.get('screen');
  
  const Custombutton: React.FC<AuthScreenProps> = ({title, disable, onPress, isLoading, inverse, textStyles}) => {
    return (
      <>
        <TouchableOpacity style={[styles.container, {backgroundColor: disable ? 'gray': inverse ? 'white':Colors.primary, borderWidth: 1, borderColor: Colors.primary}]} onPress={disable ? () => null : onPress}>
          {isLoading ? <ActivityIndicator animating={true} size='small' color={inverse ? 'green': 'white' }/> :<Text style={[styles.text, {color: inverse ? Colors.primary : 'white' }, {...textStyles}]}>{title}</Text>}
        </TouchableOpacity>
      </>
    );
  };
  
  export default Custombutton;
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderRadius: 8,
      alignSelf: 'center',
      width: width - 55,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
    text: {
      color: 'white'
    }
  });
  