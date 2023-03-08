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

const MiniTV = ({ navigation: { navigate } }) => {
    return(
        <ScrollView>
            <View>
                <MyText2/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:10}}>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/images/hk1.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Home</Text>
                    </View>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/images/hk2.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Kitchen &{'\n'}Home{'\n'}Appliances</Text>
                    </View>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/images/hk3.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Home{'\n'}Improvement</Text>
                    </View>
                    <View style={{marginRight:10}}>
                        <Image source={require('../assets/images/hk4.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Cookware &{'\n'}Dining</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/hk5.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Automative</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/hk1.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Furniture</Text>
                    </View>
                    <View style={{marginRight:20}}>
                        <Image source={require('../assets/images/hk2.jpg')} style={{width:70, height:70}}/>
                        <Text style={{textAlign: 'center', color: '#000', fontSize:12}}>Fitness and{'\n'}Sports</Text>
                    </View>
                </ScrollView>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:0}}>
                    <Image source={require('../assets/images/hk11.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/hk12.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/hk13.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/hk11.jpg')} style={{width:220, height: 200, margin: 10}}/>
                    <Image source={require('../assets/images/hk12.jpg')} style={{width:220, height: 200, margin: 10, marginRight:10}}/>
                </ScrollView>
                <Text style={{margin:20, fontSize: 20, fontWeight: 'bold', color:'#000'}}>Deals on Amazon Beauty</Text>
            </View>
            <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center', backgroundColor:'#fff'}}>
                                <View style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: '#000'}}>
                                    <Image source={require('../assets/images/be1.jpg')} style={{width:100, height:150, marginLeft:'auto', marginRight: 'auto'}} />
                                    <Text style={{fontWeight:'bold', marginBottom:10}}>Deal of the Day</Text>
                                    <Text>Himalaya Herbal Purifying</Text>
                                    <Text>Neem Face Wash</Text>
                                    <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'Himalaya Herbal Purifying Neem Face Wash', image: <Image source={require('../assets/images/be1.jpg')} style={{width:100, height:150,marginBottom:60,marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 250})} underlayColor='#fff'>
                                        <Text style={style.loginText}>View</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: '#000'}}>
                                                                    <Image source={require('../assets/images/be2.jpg')} style={{width:100, height:150, marginLeft:'auto', marginRight:'auto'}} />
                                                                    <Text style={{fontWeight:'bold', marginBottom:10}}>Deal of the Day</Text>
                                                                    <Text>Face Wash by Cetaphil</Text>
                                                                    <Text>Gentle Skin Cleanser</Text>
                                                                    <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'Face Wash by Cetaphil Gentle Skin Cleanser', image: <Image source={require('../assets/images/be2.jpg')} style={{width:100, height:200,marginBottom:60, borderRadius:10, marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 224})} underlayColor='#fff'>
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

export default MiniTV;