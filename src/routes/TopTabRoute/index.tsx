import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewLoanStack from './NewLoanTab';
import LoanTopupScreen from '../../screens/loans/loantopup';
import LoanHistoryScreen from '../../screens/loans/loanhistory';
import { loan_history, loan_topup, new_loan } from '../../utils/constants';

const Tab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <Tab.Navigator
    initialRouteName={new_loan}
    screenOptions={{
        tabBarStyle:{backgroundColor: '#fff'}
    }}
    >
      <Tab.Screen name={new_loan} component={NewLoanStack} />
      <Tab.Screen name={loan_topup} component={LoanTopupScreen} />
      <Tab.Screen name={loan_history} component={LoanHistoryScreen} />
    </Tab.Navigator>
  );
}

export {MyTopTabs};