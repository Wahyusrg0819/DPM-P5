import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        buttonStyle={{ backgroundColor: '#6200ea' }}
      />
    </View>
  );
};

export default HomeScreen;
