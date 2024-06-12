import React from "react";


import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import OnboardingScreen from "./OnboardingScreen";
import BottomNavigation from "./BottomNavigation";
import ChangePassword from "./ChangePasswordScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="BottomNavigation" component={BottomNavigation}/>
        <RootStack.Screen name="ChangePassword" component={ChangePassword} />
    </RootStack.Navigator>
);

export default RootStackScreen;