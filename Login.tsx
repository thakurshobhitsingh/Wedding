import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const validateAndSave = async () => {
    if (!email.includes('@') || !email.includes('.com')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    if (phone.length !== 10 || isNaN(Number(phone))) {
      Alert.alert('Invalid Phone', 'Phone number must be 10 digits');
      return;
    }

    try {
      await AsyncStorage.setItem('userData', JSON.stringify({ email, phone }));
      Alert.alert('Success', 'Data saved successfully!');
      setEmail('');
      setPhone('');
      navigation.navigate('Wedding'); 
    } catch (e) {
      Alert.alert('Error', 'Failed to save data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Validation</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
      />

      <Button title="Submit" onPress={validateAndSave} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
