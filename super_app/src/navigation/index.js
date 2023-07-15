import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen copy/NewPasswordScreen'
import HomeScreen from '../screens/HomeScreen'
import AllChatsScreen from '../screens/ChatScreens/AllChatsScreen'
import ValidationScreen from '../screens/ValidationScreen/ValidationScreen';
import SelectGroupsScreen from '../screens/SelectGroupsScreen/SelectGroupsScreen';
import QRHome from '../screens/GenerateQRScreen/QRHome';
import MarketplaceHome from '../screens/MarketplaceScreens/MarketplaceHome';
import QRGeneratorScreen from '../screens/GenerateQRScreen/QRGeneratorScreen';
import MarketplaceItem from '../screens/MarketplaceScreens/MarketplaceItem';
import Carousel from '../screens/MarketplaceScreens/MarketplaceItem';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ValidationScreen" component={ValidationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
            <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AllChatsScreen" component={AllChatsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SelectGroupsScreen" component={SelectGroupsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="QRHome" component={QRHome} options={{ headerShown: false }} />
            <Stack.Screen name="MarketplaceHome" component={MarketplaceHome} options={{ headerShown: false }} />
            <Stack.Screen name="QRGeneratorScreen" component={QRGeneratorScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MarketplaceItem" component={MarketplaceItem} options={{ headerShown: false }} />

        </Stack.Navigator>    
    </NavigationContainer>
  )
}

export default Navigation