import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
} from 'react-native';
import React, {useRef, useCallback, useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Custombutton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import {setpassword} from '../../../utils/constants';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import ArrowDownIcon from '../../../assets/icons/ArrowDownIcon';
import { getTables } from '../../../services/Tables';
import CustomText from '../../../components/CustomText';

interface TablesProp {
  id: number;
  alias: string;
  name: string;
}

const RegisterScreen = ({navigation, route}: any) => {
  const {email, phone} = route.params;
  const refRBSheet = useRef<any>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [showBottom, setShowBottom] = useState(false);
  const [selectedTable, setSelectedTable] = useState<any>({});
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [availableTables, setAvailableTable] = useState([])


  const handleSubmit = () => {
    if (!firstname || !lastname) {
      setErrorMessage('Enter your first name and last name');
      return;
    }
    if (!selectedTable?.name || !selectedTable?.alias) {
      setErrorMessage('Select your preferred table');
      return;
    }

    const payload = {
      name: firstname + " " +lastname,
      phone,
      email,
      tableId: selectedTable.alias,
    };

    navigation.navigate(setpassword, {payload});
  };
  const handleTableSelect = (item: TablesProp) => {
    console.log(item);
    setSelectedTable(item);
    bottomSheetRef?.current?.close();
  };

  const handleSheetChanges = useCallback((index: number) => {
    //  bottomSheetRef?.current?.close();
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboard}
        >
          <View>
            <CustomText style={styles.register}>Join Our Celebration</CustomText>
            <CustomText style={styles.info}>Register now and be a part of our special day</CustomText>
            <CustomTextInput label="First Name" onChangeText={setFirstname} value={firstname}/>
            <CustomTextInput label="Last Name" onChangeText={setLastname} value={lastname}/>
            <CustomText style={styles.label}>Select Table</CustomText>
            <Pressable
              onPress={() => setShowBottom(!showBottom)}
              style={styles.select}
            >
              <CustomText>
                {selectedTable?.name ? selectedTable?.name : 'Select Table'}
              </CustomText>
              <ArrowDownIcon />
            </Pressable>
            <Custombutton title="continue" onPress={handleSubmit} />
            {errorMessage ? (
              <View
                style={{
                  backgroundColor: 'pink',
                  padding: 10,
                  marginTop: 10,
                  borderRadius: 8,
                }}
              >
                <CustomText style={{color: 'red', fontSize: 10}}>{errorMessage}</CustomText>
              </View>
            ) : null}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      {showBottom ? (
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={['35%', '50%','90%']}
          // index={-1}
          backgroundStyle={styles.backgroundStyle}
        >
          <BottomSheetScrollView
            style={styles.contentContainer}
            contentContainerStyle={{paddingBottom: 30}}
          >
            <CustomText style={styles.header}>Select preffered table</CustomText>
            {availableTables.map((table: any,i) => (
              <Pressable
                key={i}
                onPress={() => handleTableSelect(table)}
                style={{
                  paddingVertical: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: 'lightgray',
                }}
              >
                <CustomText style={{fontSize: 16}}>{table?.name}</CustomText>
                <CustomText style={{fontSize: 12}}>{table?.description}</CustomText>
              </Pressable>
            ))}
          </BottomSheetScrollView>
        </BottomSheet>
      ) : null}
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  backgroundStyle: {},
  header: {
    fontWeight: '600',
    color: '#333',
  },
  label: {
    marginBottom: 10,
    color: '#333',
    fontSize: 16,
  },
  content: {flexGrow: 1},
  keyboard: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  register: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 26,
    color: '#333',
  },
  info: {
    fontSize: 14,
    lineHeight: 19,
    color: '#333',
    paddingBottom: 15,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    height: 70,
  },
});
