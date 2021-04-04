import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator' ;
import ItemRequestScreen from '../screens/ItemRequestScreen' ;


export const AppTabNavigator = createBottomTabNavigator({
    DisplayItem : {
      screen: AppStackNavigator,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "Exchange ",
      }
    },
    BookRequest: {
      screen: ItemRequestScreen,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
        tabBarLabel : "Item Request",
      }
    }
  });
  