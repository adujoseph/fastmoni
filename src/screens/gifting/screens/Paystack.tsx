import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { View } from 'react-native';

const Pay = ({amount,email, handleSuccess, handleError} : any) => {
  return (
    <View style={{ flex: 1 }}>
      <Paystack  
        paystackKey="pk_test_3d88065c4d72f0a1f435ca677609ad0da70fc33b"
        amount={amount}
        billingEmail={email}
        activityIndicatorColor="green"
        onCancel={(e) => {
          handleError(e)
        }}
        onSuccess={(res) => {
          handleSuccess(res)
        }}
        autoStart={true}
      />
    </View>
  );
}

export default Pay