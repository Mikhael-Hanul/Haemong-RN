import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
          <Image 
            source={require('../assets/User.png')} 
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>안녕하세요{'\n'}좋은 꿈 꾸셨나요?</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="검색어를 입력하세요"
          placeholderTextColor="#FFFFFF"
          selectionColor="#FFFFFF" // 선택 영역의 색상을 설정
        />
        <Text style={styles.hintText}>  ex) 취업, 복권, 돼지 나오는 꿈, 조상 나오는 꿈</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242434',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 60, // 상태바 아래로 내리기 위해 여백 추가
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    marginBottom: 50, // 텍스트와의 간격을 위해 여백 추가
  },
  textContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    color: '#fff',
    lineHeight: 40,
  },
  profileImage: {
    width: 25,
    height: 25,
  },
  searchContainer: {
    width: '100%',
  },
  searchInput: {
    height: 40,
    borderColor: '#464656',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    backgroundColor: '#3c3c4c',
    color: '#FFFFFF', // 입력 텍스트 색상 설정
  },
  hintText: {
    marginTop: 10,
    color: '#888',
    fontSize: 14,
  },
});

export default HomeScreen;
