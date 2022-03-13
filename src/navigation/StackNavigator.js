import 'react-native-gesture-handler';
import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Subscriptions from "../screens/Subscriptions";
import Browse from "../screens/Browse";
import Splash from "../screens/Splash";
import Profile from "../screens/Profile";
import Onboarding from "../screens/Onboarding";
import Login from "../screens/Login";

import BottomTabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "transparent",
  },

  headerTintColor: "transparent",
  headerBackTitle: "Back",
  tabBarStyle: { position: 'absolute', borderStyle:'solid', borderColor:'red', borderWidth:1 },
  tabBarOptions: { showLabel: true ,   activetintcolor:"red"}
}


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} independent={true}
    screenOptions={{
      headerShown: false
    }} 
    >
      <Stack.Screen name="Homee"   activetintcolor="red"  component={Home} initialRouteName='Settings' independent={true} options={{headerLeft: (props) => null }}  />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Subscriptions" component={Subscriptions} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}
const BrowseStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Browsee" component={Browse} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}
const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Aboutt" component={About} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profilee" component={Profile} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}
export default MainStackNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} initialRouteName="Home" />
        </Stack.Navigator>
    );
}


export { HomeStackNavigator,BrowseStackNavigator, AboutStackNavigator , ContactStackNavigator,ProfileStackNavigator };