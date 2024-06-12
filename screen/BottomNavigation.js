import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import CommunityScreen from './CommunityScreen';
import LockerScreen from './LockerScreen';

const Bottom = createBottomTabNavigator();

const CustomBottomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View style={styles.customButton}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Bottoms = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          elevation: 0,
          backgroundColor: '#191925',
          height: 70,
          borderTopWidth: 0,
          ...styles.shadow,
        },
      }}
    >
      <Bottom.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image 
                source={require('../assets/Home.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#fff' : '#748c94'
                }}
              />
              <Text style={{ color: focused ? '#fff' : '#748c94', fontSize: 12 }}>HOME</Text>
            </View>
          )
        }}
      />
      <Bottom.Screen 
        name="Locker" 
        component={LockerScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/Plus.png')}
              resizeMode='contain'
              style={styles.plusIcon}
            />
          ),
          tabBarButton: (props) => (
            <CustomBottomButton {...props}>
              <Image
                source={require('../assets/Plus.png')}
                resizeMode='contain'
                style={styles.plusIcon}
              />
            </CustomBottomButton>
          )
        }}
      />
      <Bottom.Screen 
        name="Community" 
        component={CommunityScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image 
                source={require('../assets/Chat.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#fff' : '#748c94'
                }}
              />
              <Text style={{ color: focused ? '#fff' : '#748c94', fontSize: 12 }}>COMMUNITY</Text>
            </View>
          )
        }}
      />
    </Bottom.Navigator>
  );
}

const styles = StyleSheet.create({
  customButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: 30,
    height: 30,
    tintColor: '#AEAEB2',
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Bottoms;
