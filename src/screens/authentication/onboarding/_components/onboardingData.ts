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
    image: require('../../../../assets/images/onboarding1.png'),
    text: 'Our Love Story Begins',
    describe: "Joseph & Zion's Wedding Celebration",
    textColor: '#f8dac2',
    backgroundColor: '#154f40',
  },
  {
    id: 2,
    image: require('../../../../assets/images/onboarding2.png'),
    text: 'A Love That Lasts',
    describe: 'Celebrating our union with joy and love',
    textColor: '#154f40',
    backgroundColor: '#fd94b2',
  },
  {
    id: 3,
    image: require('../../../../assets/images/onboarding3.png'),
    text: 'Together Forever!',
    describe: 'Join our wedding celebration and share our joy',
    textColor: 'black',
    backgroundColor: '#f8dac2',
  },
];

export {data};