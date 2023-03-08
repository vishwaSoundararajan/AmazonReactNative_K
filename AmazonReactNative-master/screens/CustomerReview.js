import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const Discount = () => {
    return(
        <View>
            <Text style={{fontSize:15, fontWeight: 'bold', marginLeft:15, color: '#000', paddingBottom:10}}>Shop deals by customer review</Text>
            <View style={{backgroundColor:'#E1ECF4', height:2}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15, fontWeight:'bold'}}><Image source={require('../assets/images/star1.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star1.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star1.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star1.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star2.png')} style={{width:15, height:15}}/> and up</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15, fontWeight:'bold'}}><Image source={require('../assets/images/star1.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star1.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star1.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star2.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star2.png')} style={{width:15, height:15}}/> and up</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15, fontWeight:'bold'}}><Image source={require('../assets/images/star1.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star1.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star2.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star2.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star2.png')} style={{width:15, height:15}}/> and up</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <Text style={{paddingLeft:15, color:'#2F5A59', paddingBottom:15, paddingTop:15, fontWeight:'bold'}}><Image source={require('../assets/images/star1.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star2.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star2.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star2.png')} style={{width:15, height:15}}/><Image source={require('../assets/images/star2.png')} style={{width:15, height:15}}/> and up</Text>
        </View>
    );
}

export default Discount;