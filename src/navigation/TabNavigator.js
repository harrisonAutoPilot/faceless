import 'react-native-gesture-handler';
import React from "react";
import { Image, View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./style";

import { HomeStackNavigator, ContactStackNavigator, SpaceStackNavigator, BrowseStackNavigator,ProfileStackNavigator} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    activeTintColor: "red",
    inactiveTintColor: "gray",
    labelStyle: {fontSize: 10},
    showLabel:{Visible:false},
     showLabel: false,
    style: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 15,
    //   borderTopRightRadius: 15,
      borderTopWidth: 1,
      borderTopColor:'red',
      borderTopStyle:'solid',
      // height: 60,
      shadowColor: 'rgb(230, 235, 243)',
      shadowOffset: {
        width: 0,
        height: -6,
      },
      shadowOpacity: 0.45,
      shadowRadius: 12,
      elevation: 10,
      paddingHorizontal: 16,
    },
    tabStyle: {
      height: 50,
      paddingHorizontal: 1,
      marginTop:0,
      backgroundColor:'transparent',
     
      
    },
    keyboardHidesTabBar: true,
    adaptive: false,
  };

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarOptions} screenOptions={{ headerShown: false }}>
            
            <Tab.Screen
                name="HomeStat"
                initialRouteName='HomeStat'
                component={HomeStackNavigator}
                // showLabel= "false"
                activetintcolor="red"
                options={{
                  
                    tabBarStyle: { position: 'absolute', borderTopWidth: 0, borderStyle:'solid', borderTopColor:'red'},
                    tabBarOptions: { showLabel: false },
                  
                    tabBarIcon: ({ color, focused }) => (
                        <View>
                            {focused ? <View style={styles.tabLableTop}></View> : null}
                            <Image source={require("../assets/home.png")} style={{width: 22, height: 22, marginTop:19}} />
                        </View>
                    ),
                    
                }}
                tabBarOptions={{
                    activeTintColor: 'orange',
                    inactiveTintColor: 'violet',
                  }}
                 />

            <Tab.Screen 
                showLabel="false"
                name="Contact" 
                component={ContactStackNavigator}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View>
                            {focused ? <View style={styles.tabLableTop}></View> : null}
                            <Image source={require("../assets/subscribe.png")} style={{width: 22, height: 22, marginTop:18}} />
                        </View>
                    ),
                   
                    activeTintColor:'blue',
                    inactiveTintColor:'#D3D3D3',
                    style:{
                        backgroundColor:'green',
                        borderTopWidth:3,
                        borderTopColor:'#D3D3D3',
                        borderStyle:'solid',
                        paddingTop:50,
                    },
                    indicatorStyle: {
                        backgroundColor: 'red',
                        borderTopWidth:3,
                        borderTopColor:'#D3D3D3',
                        borderStyle:'solid',
                        paddingTop:50,

                    },
                }}
                
            />
             <Tab.Screen 
                name="Space" 
                showLabel="false"
                component={SpaceStackNavigator}
                options={{
                  
                    tabBarStyle: { position: 'absolute', borderWidth: 1, borderStyle:'solid'},
                    tabBarOptions: {showLabel: false, },
                  
                    tabBarIcon: () => (<Image source={require("../assets/mee.jpg")} style={{width: 80, height: 80, borderRadius:100,marginBottom:30, zIndex:90}} />),
                    showLabel: false,
                }}
            />
          
             <Tab.Screen 
                name="Browse" 
                component={BrowseStackNavigator}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View>
                            {focused ? <View style={styles.tabLableTop}></View> : null}
                            <Image source={require("../assets/magnifying-glass.png")} style={{width: 22, height: 22, marginTop:18}} />
                        </View>
                    ),
                }}
            />
             <Tab.Screen 
                name="Profile" 
                component={ProfileStackNavigator}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View>
                            {focused ? <View style={styles.tabLableTop}></View> : null}
                            <Image source={require("../assets/userr.png")} style={{width: 22, height: 22, marginTop:18}} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
   
};

export default BottomTabNavigator;