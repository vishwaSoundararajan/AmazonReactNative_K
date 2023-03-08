import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const Availability = () => {
    return(
        <View>
            <Text style={{fontSize:15, fontWeight: 'bold', marginLeft:15, color: '#000', paddingBottom:10}}>Shop deals by availability</Text>
            <View style={{backgroundColor:'#E1ECF4', height:2}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15, fontWeight:'bold'}}>All deals</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>Available</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>Upcoming</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>Watchlist</Text>
        </View>
    );
}

export default Availability;