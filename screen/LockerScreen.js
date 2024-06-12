import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

const LockerScreen = () => {
  const [selectedTab, setSelectedTab] = useState('diary');

  const renderList = () => {
    const data = selectedTab === 'diary' ? ['취업 확정낸 날', '길가다 1만원 주운 날'] : ['떨어지는 꿈', '조상님 나오는 꿈'];
    
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item}</Text>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity style={styles.writeButton}>
            <Text style={styles.writeButtonText}>글 작성하기</Text>
          </TouchableOpacity>
        }
        contentContainerStyle={styles.listContentContainer}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="일기 보관함"
          onPress={() => setSelectedTab('diary')}
          color={selectedTab === 'diary' ? '#fff' : '#888'}
        />
        <Button
          title="해몽 보관함"
          onPress={() => setSelectedTab('dream')}
          color={selectedTab === 'dream' ? '#fff' : '#888'}
        />
      </View>
      <View style={styles.listContainer}>
        {renderList()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242434',
    paddingTop: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  listContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  listItem: {
    backgroundColor: '#3c3c4c',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  listText: {
    color: '#fff',
    fontSize: 18,
  },
  writeButton: {
    backgroundColor: '#C7C7C7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  writeButtonText: {
    color: '#21212F',
    fontSize: 18,
  },
});

export default LockerScreen;
