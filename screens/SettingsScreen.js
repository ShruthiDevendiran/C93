import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SettingsScreen extends Component{
    render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <Text>SettingsScreen</Text>
            </View>
        )
    }
}