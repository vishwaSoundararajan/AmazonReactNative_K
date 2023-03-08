import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const ShopBy = () => {
    return(
        <View>
            <Text style={{fontSize:15, fontWeight: 'bold', marginLeft:15, color: '#000', paddingBottom:10}}>Shop deals by</Text>
            <View style={{backgroundColor:'#E1ECF4', height:2}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15, fontWeight:'bold'}}>Featured</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>Discount - Low to High</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>Discount - High to Low</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15}}>Price - Low to High</Text>
        </View>
    );
}

export default ShopBy;