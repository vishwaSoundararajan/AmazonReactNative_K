import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const Discount = () => {
    return(
        <View>
            <Text style={{fontSize:15, fontWeight: 'bold', marginLeft:15, color: '#000', paddingBottom:10}}>Shop deals by discount</Text>
            <View style={{backgroundColor:'#E1ECF4', height:2}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15, fontWeight:'bold'}}>All deals</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>10% off or more</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>25% off or more</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>50% off or more</Text>
        </View>
    );
}

export default Discount;