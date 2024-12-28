import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Details Screen</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        buttonStyle={{ backgroundColor: '#03dac5' }}
      />
    </View>
  );
};

export default DetailsScreen;
