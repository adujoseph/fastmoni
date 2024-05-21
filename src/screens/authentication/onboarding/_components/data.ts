import {ImageProps} from 'react-native';

export interface OnboardingData {
  id: number;
  image: ImageProps;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    image: require('../../../../assets/images/onboard4.png'),
    text: 'Our Love Story Begins!',
    textColor: '#f8dac2',
    backgroundColor: '#154f40',
  },
  {
    id: 2,
    image: require('../../../../assets/images/onboard2.png'),
    text: 'Together forever is our goal',
    textColor: '#154f40',
    backgroundColor: '#fd94b2',
  },
  {
    id: 3,
    image: require('../../../../assets/images/onboard3.png'),
    text: 'Join this journey',
    textColor: 'black',
    backgroundColor: '#f8dac2',
  },
];

export default data;