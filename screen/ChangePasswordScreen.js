import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangePassword = () => {
    if (password === confirmPassword) {
      console.log('Password changed successfully');
      setErrorMessage('');
      // 비밀번호가 성공적으로 변경되었을 때의 로직을 추가합니다.
    } else {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>비밀번호를 변경해주세요</Text>
      <TextInput
        style={styles.input}
        placeholder="새 비밀번호"
        placeholderTextColor="#888"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 재확인"
        placeholderTextColor="#888"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button title="비밀번호 변경" onPress={handleChangePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242434',
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
    alignSelf: 'flex-start', // 텍스트를 왼쪽으로 정렬
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#464656',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    backgroundColor: '#3c3c4c',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  error: {
    color: 'red',
    marginBottom: 15,
    alignSelf: 'flex-start', // 오류 메시지도 왼쪽으로 정렬
  },
});

export default ChangePasswordScreen;
