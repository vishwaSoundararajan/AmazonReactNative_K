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

const Electronics = ({ navigation: { navigate } }) => {
    return(
        <ScrollView>
            <View>
                <MyText2/>
                <Image source={require('../assets/images/elb1.jpg')} style={{width:530, height: 200}}/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:10}}>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/images/el1.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Speakers</Text>
                    </View>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/images/el2.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Components</Text>
                    </View>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/images/el3.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Gaming{'\n'}Accessories</Text>
                    </View>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/images/el4.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Pen drives</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/el1.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Tablets</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/el2.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Laptop{'\n'}bags</Text>
                    </View>
                    <View style={{marginRight:20}}>
                        <Image source={require('../assets/images/el3.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Office{'\n'}electronics</Text>
                    </View>
                </ScrollView>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:0}}>
                    <Image source={require('../assets/images/f6.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f7.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f8.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f9.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f10.jpg')} style={{width:220, height: 200, margin: 10, marginRight:10}}/>
                </ScrollView>
                <Text style={{margin:20, fontSize: 20, fontWeight: 'bold', color:'#000'}}>Deals on Amazon Electronics</Text>
            </View>
            <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center', backgroundColor:'#fff'}}>
                                <View style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: '#000'}}>
                                    <Image source={require('../assets/images/elb3.jpg')} style={{width:'100%', height:150}} />
                                    <Text style={{fontWeight:'bold', marginBottom:10}}>Deal of the Day</Text>
                                    <Text>Starting INR 249, Digitek</Text>
                                    <Text>Camera Batteries</Text>
                                    <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'Starting INR 249, Digitek Camera Batteries', image: <Image source={require('../assets/images/elb3.jpg')} style={{width:200, height:200,marginBottom:60,marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 750})} underlayColor='#fff'>
                                        <Text style={style.loginText}>View</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: '#000'}}>
                                                                    <Image source={require('../assets/images/elb4.jpg')} style={{width:'100%', height:150}} />
                                                                    <Text style={{fontWeight:'bold', marginBottom:10}}>Deal of the Day</Text>
                                                                    <Text>20% Off on Duracell</Text>
                                                                    <Text>Rechargeable Batteries</Text>
                                                                    <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: '20% off on Duracell Rechargeable Batteries', image: <Image source={require('../assets/images/elb4.jpg')} style={{width:200, height:200,marginBottom:60, borderRadius:10, marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 300})} underlayColor='#fff'>
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

export default Electronics;