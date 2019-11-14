/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable prettier/prettier */
// Main Screen
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import MapView, { Marker } from 'react-native-maps';

export default class Main extends React.Component {
  state = {
    currentUser: null,
    // mapRegion: null,
    // lastLat: null,
    // lastLong: null,
  }

  // animateMarkerToCoordinate(coordinate){

  // }


  onRegionChange(region) {
    this.setState({ region });
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });

  }


  render() {

    var mapStyle = [{'elementType': 'geometry', 'stylers': [{'color': '#242f3e'}]},{'elementType': 'labels.text.fill','stylers': [{'color': '#746855'}]},{'elementType': 'labels.text.stroke','stylers': [{'color': '#242f3e'}]},{'featureType': 'administrative.locality','elementType': 'labels.text.fill','stylers': [{'color': '#d59563'}]},{'featureType': 'poi','elementType': 'labels.text.fill','stylers': [{'color': '#d59563'}]},{'featureType': 'poi.park','elementType': 'geometry','stylers': [{'color': '#263c3f'}]},{'featureType': 'poi.park','elementType': 'labels.text.fill','stylers': [{'color': '#6b9a76'}]},{'featureType': 'road','elementType': 'geometry','stylers': [{'color': '#38414e'}]},{'featureType': 'road','elementType': 'geometry.stroke','stylers': [{'color': '#212a37'}]},{'featureType': 'road','elementType': 'labels.text.fill','stylers': [{'color': '#9ca5b3'}]},{'featureType': 'road.highway','elementType': 'geometry','stylers': [{'color': '#746855'}]},{'featureType': 'road.highway','elementType': 'geometry.stroke','stylers': [{'color': '#1f2835'}]},{'featureType': 'road.highway','elementType': 'labels.text.fill','stylers': [{'color': '#f3d19c'}]},{'featureType': 'transit','elementType': 'geometry','stylers': [{'color': '#2f3948'}]},{'featureType': 'transit.station','elementType': 'labels.text.fill','stylers': [{'color': '#d59563'}]},{'featureType': 'water','elementType': 'geometry','stylers': [{'color': '#17263c'}]},{'featureType': 'water','elementType': 'labels.text.fill','stylers': [{'color': '#515c6d'}]},{'featureType': 'water','elementType': 'labels.text.stroke','stylers': [{'color': '#17263c'}]}];

    // const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <MapView
            style={styles.map}
            initialRegion={{
              latitude: 27.665756,
              longitude: 85.329103,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            customMapStyle= {mapStyle}>

              <Marker
                draggable coordinate={{
                  latitude: 27.665756,
                  longitude: 85.329103,
                }}
                // onDragEnd={(e) => {console.log('dragEnd', e.nativeEvent.coordinate);}}
                onDragEnd={(e) => {console.log('dragEnd', e.nativeEvent.coordinate);
                                    Alert.alert(JSON.stringify(e.nativeEvent.coordinate));}}
                title={'Test Marker'}
                description={'This is a description of the marker'}
                onDrag = {(e) => {console.log('onDrag', e.nativeEvent.coordinate);}}
              />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    backgroundColor: '#432577',
    borderRadius: 2,
    padding: 8,
    margin: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});
