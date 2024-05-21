import React, { useState } from 'react'
import { View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';



const CheckSteps = ({ step }: any) => {
    const [currentPosition, setCurrentPositon] = useState(step)
    const labels = ["Invited", "Registered", "Checked-in"];
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 25,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 2,
        stepStrokeCurrentColor: 'purple',
        stepStrokeWidth: 1,
        stepStrokeFinishedColor: 'purple',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: 'purple',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: 'purple',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: 'purple',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 14,
        currentStepLabelColor: 'purple'
    }

    return (
        <View style={{width:'100%'}}>
            <Text style={{marginBottom: 15, fontSize: 14, color:'#333'}}>Check-in status</Text>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
                direction={'horizontal'}
                stepCount={3}
            />
        </View>

    )

}

export default CheckSteps;



