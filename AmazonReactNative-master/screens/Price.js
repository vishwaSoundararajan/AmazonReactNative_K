import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const Price = () => {
    return(
        <View>
            <Text style={{fontSize:15, fontWeight: 'bold', marginLeft:15, color: '#000', paddingBottom:10}}>Shop deals by price</Text>
            <View style={{backgroundColor:'#E1ECF4', height:2}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15, fontWeight:'bold'}}>All</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>Under {'\u20B9'}2,000</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>{'\u20B9'}2,000 to 5,000</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>{'\u20B9'}5,000 and Above</Text>
        </View>
    );
}

export default Price;