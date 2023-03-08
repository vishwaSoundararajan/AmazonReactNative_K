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

const Movies = ({ navigation: { navigate } }) => {
    return(
        <ScrollView>
            <View>
                <MyText2/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff'}}>

                        <Image source={require('../assets/images/header1.webp')} style={{width:300, height:200, margin:10, borderRadius:10}}/>



                        <Image source={require('../assets/images/header2.webp')} style={{width:300, height:200, margin:10, borderRadius:10}}/>


                        <Image source={require('../assets/images/header3.webp')} style={{width:300, height:200, margin:10, marginRight:10, borderRadius:10}}/>



                </ScrollView>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#E1ECF4', padding:0}}>
                    <Image source={require('../assets/images/f6.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f7.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f8.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f9.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/f10.jpg')} style={{width:220, height: 200, margin: 10, marginRight:10}}/>
                </ScrollView>
                <Text style={{margin:20, fontSize: 20, fontWeight: 'bold', color:'#000'}}>Deals on Amazon Books</Text>
            </View>
            <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center', backgroundColor:'#fff'}}>
                                <View style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: '#000'}}>
                                    <Image source={require('../assets/images/book3.jpg')} style={{width:'100%', height:200}} />
                                    <Text style={{fontWeight:'bold', marginBottom:10}}>Deal of the Day</Text>
                                    <Text>The power of your</Text>
                                    <Text>Subconscious mind</Text>
                                    <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'The power of your Subconscious mind', image: <Image source={require('../assets/images/book3.jpg')} style={{width:150, height:200,marginBottom:60,marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 260})} underlayColor='#fff'>
                                        <Text style={style.loginText}>View</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: '#000'}}>
                                                                    <Image source={require('../assets/images/book2.jpg')} style={{width:'100%', height:200}} />
                                                                    <Text style={{fontWeight:'bold', marginBottom:10}}>Deal of the Day</Text>
                                                                    <Text>Rich Dad Poor Dad</Text>
                                                                    <Text>Robert T. Kiyosaki</Text>
                                                                    <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'Rich Dad Poor Dad - Robert T. Kiyosaki', image: <Image source={require('../assets/images/book2.jpg')} style={{width:150, height:200,marginBottom:60, marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 28000})} underlayColor='#fff'>
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

export default Movies;