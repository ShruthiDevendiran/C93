import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import{NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from '../navigation/DrawerNavigator'

export default class DashboardScreen extends Component{
    render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <NavigationContainer>
                  <DrawerNavigator/>
               </NavigationContainer>
            </View>
        )
    }
}