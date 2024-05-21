import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import LoanDtiScreen from '../../screens/loans/newloan/LoanDTI';
import LoanFormScreen from '../../screens/loans/newloan/LoanForm';
import LoanDocumentScreen from '../../screens/loans/newloan/UploadDocument';
import NewLoanScreen from '../../screens/loans/newloan/Loan';
import LoanBankDetailsScreen from '../../screens/loans/newloan/BankDetails';
import {
  loan_bank,
  loan_doc,
  loan_form,
  loan_dti,
  new_loan,
  new_loan_,
} from '../../utils/constants';

const HomeStack = createStackNavigator();

const horizontalAnimation = {
  gestureDirection: 'horizontal-inverted',
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const NewLoanStackScreen = () => (
  <HomeStack.Navigator initialRouteName={new_loan_} screenOptions={{}}>
    <HomeStack.Screen
      name={new_loan_}
      component={NewLoanScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerShown: false,
        headerBackTitle: '',
        // headerTintColor: "#E96B03",
      }}
    />

  </HomeStack.Navigator>
);

export default NewLoanStackScreen;
