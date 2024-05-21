import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../utils/themes';
import CustomText from './CustomText';
import EyesClosedIcon from '../assets/icons/EyesClosedIcon';
import EyesOpenIcon from '../assets/icons/EyesOpenIcon';

interface ModernTextInputProps extends TextInputProps {
  placeholder?: string;
  label?: string;
  phone?: boolean;
  onChangeText?: (val: any) => void;
}

const CustomTextInput: React.FC<ModernTextInputProps> = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  label,
  phone,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hideText, setHideText] = useState(secureTextEntry);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <>
      <View>
        <CustomText style={styles.label}>{label}</CustomText>
        <View style={[styles.container, isFocused && styles.focused]}>
          {phone ? <CustomText style={styles.text}>+234</CustomText> : null}
          <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={styles.input}
            secureTextEntry={hideText}
            {...rest}
          />
          {secureTextEntry ? (
            <TouchableOpacity
              onPress={() => setHideText(!hideText)}
              style={styles.icon}
            >
              <CustomText>{hideText ? <EyesOpenIcon/>  : <EyesClosedIcon />}</CustomText>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 5,
    marginBottom: 10,
  },
  icon:{
    position:'relative',
    right: 35,
    zIndex: 999

  },
  focused: {
    borderColor: Colors.primary,
  },
  input: {
    fontSize: 14,
    width: '100%',
    height: 50,
    paddingLeft: 10,
    color:"#333"
  },
  text: {
    color: '#333',
    fontWeight: '700',
    fontSize: 14,
    borderRightWidth : 1,
    borderLeftColor: 'lightgray',
    paddingRight: 10
  },
  label: {
    marginBottom: 10,
    color: '#333',
  },
});
