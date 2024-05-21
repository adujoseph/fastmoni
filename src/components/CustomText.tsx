import React, { FC, ReactNode } from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

interface CustomTextProps {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}

const CustomText: FC<CustomTextProps> = ({ style, children }) => {
  return (
    <Text style={[{ fontFamily: 'Outfit-Regular', fontSize: 16, color: '#333' }, style]}>
      {children}
    </Text>
  );
};

export default CustomText;