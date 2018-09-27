import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Forecast extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.fontMain}>{this.props.main}</Text>
        <Text style={styles.fontDescription}>{this.props.description}</Text>
        <View style={styles.tempContainer}>
          <Text style={styles.fontTemp}>{this.props.temp}</Text>
          <Text style={styles.fontC}>°C</Text>
    
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tempContainer: {
    display: "flex",
    flexDirection: "row"
  },
  fontMain: {
    color: 'black',
    paddingTop: 25,
    fontSize: 32
  },
  fontDescription: {
    color: 'black',
    paddingTop: 25,
    fontSize: 20
  },
  fontTemp: {
    color: 'black',
    paddingTop: 25,
    fontSize: 35
  },
  fontC: {
    color: 'black',
    paddingTop: 40,
    fontSize: 20

  }
});