import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
        My name is <Text style={styles.boldText}>Nyanyo Edem Larry Kwaku</Text>
        <StatusBar style="auto" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 24, 
  },
});
