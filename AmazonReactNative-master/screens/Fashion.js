import Cart1 from './Cart.js';
import React from 'react';
import {View,Text,ScrollView, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function MyText2() {
    const route = useRoute();
    return(
        <View style={{margin: 20}}>
            <Text style={{fontSize: 25, color: '#000', fontWeight:'bold'}}>{route.params.caption}</Text>
        </View>
    );
}

const Fashion = ({ navigation: { navigate } }) => {
    return(
        <ScrollView>
            <View>
                <MyText2/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:10}}>
                    <View>
                        <Image source={require('../assets/images/f1.jpeg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Winter{'\n'}Wear</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/f2.jpeg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Men's{'\n'}Clothing</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/f3.jpeg')} style={{width:70, height:60}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12, marginTop:10}}>Women's{'\n'}Clothing</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/f4.jpeg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Beauty</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/f5.jpeg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Footwear</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/f1.jpeg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Summer{'\n'}Wear</Text>
                    </View>
                    <View style={{marginRight:20}}>
                        <Image source={require('../assets/images/f4.jpeg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Other{'\n'}Products</Text>
                    </View>
                </ScrollView>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:0}}>
                    <Image source={require('../assets/images/f6.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f7.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f8.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f9.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f10.jpg')} style={{width:220, height: 200, margin: 10, marginRight:10}}/>
                </ScrollView>
                <Text style={{margin:20, fontSize: 20, fontWeight: 'bold', color:'#000'}}>Deals on Amazon Fashion & Beauty</Text>
            </View>
            <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center', backgroundColor:'#fff'}}>
                                <View style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: '#000'}}>
                                    <Image source={require('../assets/images/ff1.jpg')} style={{width:'100%', height:150}} />
                                    <Text style={{fontWeight:'bold', marginBottom:10}}>Deal of the Day</Text>
                                    <Text>Exclusive Deals on</Text>
                                    <Text>Gold & Silver Coins...</Text>
                                    <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'Gold', image: <Image source={require('../assets/images/ff1.jpg')} style={{width:200, height:200,marginBottom:60,marginTop:20}} />, price: 100000})} underlayColor='#fff'>
                                        <Text style={style.loginText}>View</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: '#000'}}>
                                                                    <Image source={require('../assets/images/ff2.jpg')} style={{width:'100%', height:150}} />
                                                                    <Text style={{fontWeight:'bold', marginBottom:10}}>Deal of the Day</Text>
                                                                    <Text>Best of Sports</Text>
                                                                    <Text>Footwear</Text>
                                                                    <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'Sports Footwear', image: <Image source={require('../assets/images/ff2.jpg')} style={{width:200, height:200,marginBottom:60, borderRadius:10, marginTop:20}} />, price: 3000})} underlayColor='#fff'>
                                                                        <Text style={style.loginText}>View</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    loginScreenButton:{
        marginBottom:0,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: 'orange'
    },
    loginText:{
        color:'#000',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
});

export default Fashion;