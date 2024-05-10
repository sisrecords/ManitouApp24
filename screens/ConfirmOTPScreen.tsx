import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {sendEmailOTP, validateOTP} from '../services/api.tsx';

const ConfirmOTPScreen = ({navigation, route}) => {
  const [otp, setOtp] = useState('');
  const {token} = route.params;
  const [error, setError] = useState('');

  const handleConfirmOTP = async () => {
    try {
      console.log('OTP confirming');
      await validateOTP(token, otp);
      console.log('OTP saving');
      await AsyncStorage.setItem('authKey', token);
      console.log('OTP confirmed');
      navigation.navigate('Home');
    } catch (error) {
      setError('קוד לא תקין');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>יש להזין את הקוד שנשלח למייל</Text>
      {error ? (
        <Text
          style={{
            color: 'red',
            width: '100%',
            textAlign: 'left',
            marginBottom: 5,
          }}>
          {error}
        </Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="קוד"
        keyboardType="email-address"
        autoCapitalize="none"
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity style={styles.button} onPress={handleConfirmOTP}>
        <Text style={styles.buttonText}>כניסה</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'right',
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#9a7d4b',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmOTPScreen;
