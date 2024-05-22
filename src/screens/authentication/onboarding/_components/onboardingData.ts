import {ImageProps} from 'react-native';

export interface OnboardingData {
  id: number;
  image: ImageProps;
  text: string;
  describe: string;
  textColor: string;
  backgroundColor: string;

}

const data: OnboardingData[] = [
  {
    id: 1,
    image: require('../../../../assets/images/onboarding1.jpeg'),
    text: 'Simplified Banking',
    describe: "Banking on the go and even in your pocket",
    textColor: '#f8dac2',
    backgroundColor: '#154f40',
  },
  {
    id: 2,
    image: require('../../../../assets/images/onboarding2.jpeg'),
    text: 'Transparency Assured',
    describe: 'Getting a full hang of your financial process is a core feature of our solutions at FastaMoni',
    textColor: '#154f40',
    backgroundColor: '#fd94b2',
  },
  {
    id: 3,
    image: require('../../../../assets/images/onboarding3.jpeg'),
    text: 'Employee Payment Management',
    describe: 'Businesses manage payment request from their employees and it helps to track how company funds are being spent',
    textColor: 'black',
    backgroundColor: '#f8dac2',
  },
];

export {data};