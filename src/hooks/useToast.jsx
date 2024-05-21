import React, {createContext, useContext, useState} from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {Colors} from '../utils/theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

// ToastProvider component to wrap your app and provide toast functionality
export function ToastProvider({children}) {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastDuration, setToastDuration] = useState(3000);
  const [toastType, setToastType] = useState('info');
  const screenHeight = Dimensions.get('window').height;
  const heightPercentage = screenHeight * 0.03;
  const showToast = (message, type = 'info', duration) => {
    setToastMessage(message);
    setToastType(type);
    setToastVisible(true);
    if (duration ?? 3000) {
      setTimeout(() => {
        closeToast();
      }, duration ?? 3000); // Hide the toast after 3 seconds
    }
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toastVisible && (
        <TouchableOpacity
          style={[
            {
              marginTop: heightPercentage,
              borderLeftWidth: 4,
              borderColor:
                toastType === 'error'
                  ? '#FF4E4E'
                  : toastType === 'success'
                  ? '#00A28E'
                  : toastType === 'info'
                  ? '#3186EA'
                  : toastType === 'warning'
                  ? '#C06F54'
                  : '#fff',
            },
            styles.toast,
            styles[toastType],
          ]}
          onPress={closeToast}>
          <Text
            style={[
              {
                textAlign: 'center',
                color:
                  toastType === 'error'
                    ? '#FF4E4E'
                    : toastType === 'success'
                    ? '#00A28E'
                    : toastType === 'info'
                    ? '#3186EA'
                    : toastType === 'warning'
                    ? '#C06F54'
                    : '#dfdfdf',
              },
              styles.toastText,
            ]}>
            {toastMessage ?? 'Something went wrong'}
          </Text>
          <TouchableOpacity onPress={closeToast}>
            <Icons
              name={toastType === 'success' ? 'checkcircleo' : 'closecircle'}
              size={20}
              color={
                toastType === 'error'
                  ? '#FF4E4E'
                  : toastType === 'success'
                  ? '#00A28E'
                  : toastType === 'info'
                  ? '#3186EA'
                  : toastType === 'warning'
                  ? '#C06F54'
                  : '#fff'
              }
            />
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    </ToastContext.Provider>
  );
}

// Styles for the toast
const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: hp(3),
  },
  info: {
    backgroundColor: 'rgb(239,245,253)',
  },
  success: {
    backgroundColor: 'rgb(240,249,248)',
  },
  error: {
    backgroundColor: 'rgb(255,246,246)',
  },
  warning: {
    backgroundColor: 'rgb(255,251,235)',
  },
  toastText: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});
