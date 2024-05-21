import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import GetLocation from 'react-native-get-location'

const { width, height } = Dimensions.get('window');
const MapDirection = ({navigation}: any) => {
  const [currentLocation, setCurrentLocation] = useState<
    { latitude: number; longitude: number } | null | any
  >({ latitude: 6.6351, longitude: 3.3573 });

  const destinationLatitude = 6.625180815476441;
  const destinationLongitude = 3.357320028810322;


  useEffect(() => {
    userLocation();
  },[navigation, currentLocation.latitude])



  const userLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then((location: any) => {
        const my_loc = {
          latitude: location.latitude,
          longitude: location.longitude
        }
        setCurrentLocation(my_loc)
        console.log(location);
      })
      .catch((error: any) => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: destinationLatitude,
          longitude: destinationLongitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation
        showsMyLocationButton
      >
        <Marker
          coordinate={{
            latitude: currentLocation?.latitude,
            longitude: currentLocation?.longitude,
          }}
        />
        <Marker
          coordinate={{
            latitude: destinationLatitude,
            longitude: destinationLongitude,
          }}
          pinColor="blue"
        />
        <MapViewDirections
          origin={{
            latitude: destinationLatitude,
            longitude: destinationLongitude,
          }}
          destination={currentLocation}
          apikey={'AIzaSyA0cerOqLskL5lyYFpv6mbjyD9q5U4d5RI'}
          strokeWidth={5}
          strokeColor="purple"
          optimizeWaypoints={true}
        />
      </MapView>
    </View>
  );
};

export default MapDirection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
