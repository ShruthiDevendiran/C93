import { StatusBar } from 'expo-status-bar'; 
import React,{Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import DrawerNavigator from './navigation/DrawerNavigator';

export default class App extends Component{
  render(){
    return(
       <View>
        <DrawerNavigator/>
       </View>
    )
  }

}
