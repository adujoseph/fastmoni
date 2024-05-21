import {ImageProps} from 'react-native'

interface Image {
    id: string;
    image: ImageProps;
  }
  
  const imageList: Image[] = [
    { id: '1', image: require('../../../assets/images/slider1.png') },
    { id: '2', image: require('../../../assets/images/slider2.png') },
    { id: '3', image: require('../../../assets/images/slider3.png') },
    { id: '4', image: require('../../../assets/images/slider4.png') },
    { id: '5', image: require('../../../assets/images/slider5.png') },
  ];


  export {
    imageList
  }