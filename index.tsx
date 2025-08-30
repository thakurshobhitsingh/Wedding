import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import Login from './Login';
import Wedding from './Wedding';
import Checklist from './Checklist';

const Stack=createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}>

      </Stack.Screen>
      <Stack.Screen name='Wedding' component={Wedding} options={{headerShown:false}}>

      </Stack.Screen>
      
      
      <Stack.Screen name='Checklist' component={Checklist} options={{headerShown:false}}>

      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
