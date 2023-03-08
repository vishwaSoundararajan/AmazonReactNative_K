import ShopBy from './ShopBy.js';
import PrimePrograms from './PrimePrograms.js';
import DealType from './DealType.js';
import CustomerReview from './CustomerReview.js';
import Price from './Price.js';
import Discount from './Discount.js';
import Availability from './Availability.js';
import ShopByCategory from './ShopByCategory.js';
import { DataTable, List, FAB, TextInput } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
import LinearGradient from 'react-native-linear-gradient';
import Cart1 from './Cart.js';
import React, {useRef} from 'react';
import {Button, View,Text,ScrollView, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function MyText2() {
    const route = useRoute();
    return(
        <View style={{margin: 20}}>
            <Text style={{fontSize: 25, color: '#000', fontWeight:'bold'}}>Today's Deals</Text>
        </View>
    );
}


const Alexa = ({ navigation: { navigate } }) => {
    const refRBSheet = useRef();
    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
    const refRBSheet3 = useRef();
    const refRBSheet4 = useRef();
    const refRBSheet5 = useRef();
    const refRBSheet6 = useRef();
    const refRBSheet7 = useRef();
    return(
        <ScrollView style={{backgroundColor:'#fff'}}>
            <LinearGradient colors={['#97b1c4', '#E1ECF4']} style={style.linearGradient}>
                <View>
                    <TextInput style={style.input} placeholder="Search in Deals"></TextInput>
                </View>
            </LinearGradient>
            <View>
                <MyText2 style={{backgroundColor:'#fff'}}/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={style.btn}
                  onPress={() => refRBSheet.current.open()} underlayColor='#fff'
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                ><Text style={{color:'#000', fontSize:12}}>Shop by category <Image source={require('../assets/images/arrow.png')} style={{width:20,height:20}}/></Text></TouchableOpacity>
                <RBSheet
                                        ref={refRBSheet}
                                        closeOnDragDown={true}
                                        closeOnPressMask={true}
                                        customStyles={{
                                            wrapper: {
                                                backgroundColor: "rgba(0,0,0,0.5)",
                                            },
                                            draggableIcon: {
                                                backgroundColor: "#000",
                                            }
                                        }}
                                    >
                                        <ShopByCategory />
                                    </RBSheet>
                <TouchableOpacity style={style.btn}
                    onPress={() => refRBSheet1.current.open()} underlayColor='#fff'
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                ><Text style={{color:'#000',  fontSize:12}}>Availability <Image source={require('../assets/images/arrow.png')} style={{width:20,height:20}}/></Text></TouchableOpacity>
                <RBSheet
                                                        ref={refRBSheet1}
                                                        closeOnDragDown={true}
                                                        closeOnPressMask={true}
                                                        customStyles={{
                                                            wrapper: {
                                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                            },
                                                            draggableIcon: {
                                                                backgroundColor: "#000",
                                                            }
                                                        }}
                                                    >
                                                        <Availability />
                                                    </RBSheet>
                <TouchableOpacity style={style.btn}
                    onPress={() => refRBSheet2.current.open()} underlayColor='#fff'
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                ><Text style={{color:'#000', fontSize:12}}>Price <Image source={require('../assets/images/arrow.png')} style={{width:20,height:20}}/></Text></TouchableOpacity>
                <RBSheet
                                                                        ref={refRBSheet2}
                                                                        closeOnDragDown={true}
                                                                        closeOnPressMask={true}
                                                                        customStyles={{
                                                                            wrapper: {
                                                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                                            },
                                                                            draggableIcon: {
                                                                                backgroundColor: "#000",
                                                                            }
                                                                        }}
                                                                    >
                                                                        <Price />
                                                                    </RBSheet>
                <TouchableOpacity style={style.btn}
                    onPress={() => refRBSheet3.current.open()} underlayColor='#fff'
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                ><Text style={{color:'#000', fontSize:12}}>Discount <Image source={require('../assets/images/arrow.png')} style={{width:20,height:20}}/></Text></TouchableOpacity>
                <RBSheet
                                                                                        ref={refRBSheet3}
                                                                                        closeOnDragDown={true}
                                                                                        closeOnPressMask={true}
                                                                                        customStyles={{
                                                                                            wrapper: {
                                                                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                                                            },
                                                                                            draggableIcon: {
                                                                                                backgroundColor: "#000",
                                                                                            }
                                                                                        }}
                                                                                    >
                                                                                        <Discount />
                                                                                    </RBSheet>
                <TouchableOpacity style={style.btn}
                    onPress={() => refRBSheet4.current.open()} underlayColor='#fff'
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                ><Text style={{color:'#000', fontSize:12}}>Customer Review <Image source={require('../assets/images/arrow.png')} style={{width:20,height:20}}/></Text></TouchableOpacity>
                <RBSheet
                                                                                                        ref={refRBSheet4}
                                                                                                        closeOnDragDown={true}
                                                                                                        closeOnPressMask={true}
                                                                                                        customStyles={{
                                                                                                            wrapper: {
                                                                                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                                                                            },
                                                                                                            draggableIcon: {
                                                                                                                backgroundColor: "#000",
                                                                                                            }
                                                                                                        }}
                                                                                                    >
                                                                                                        <CustomerReview />
                                                                                                    </RBSheet>
                <TouchableOpacity style={style.btn}
                    onPress={() => refRBSheet5.current.open()} underlayColor='#fff'
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                ><Text style={{color:'#000', fontSize:12}}>Deal type <Image source={require('../assets/images/arrow.png')} style={{width:20,height:20}}/></Text></TouchableOpacity>
                <RBSheet
                                                                                                                        ref={refRBSheet5}
                                                                                                                        closeOnDragDown={true}
                                                                                                                        closeOnPressMask={true}
                                                                                                                        customStyles={{
                                                                                                                            wrapper: {
                                                                                                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                                                                                            },
                                                                                                                            draggableIcon: {
                                                                                                                                backgroundColor: "#000",
                                                                                                                            }
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <DealType />
                                                                                                                    </RBSheet>
                <TouchableOpacity style={style.btn}
                    onPress={() => refRBSheet6.current.open()} underlayColor='#fff'
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                ><Text style={{color:'#000', fontSize:12}}>Prime Programmes <Image source={require('../assets/images/arrow.png')} style={{width:20,height:20}}/></Text></TouchableOpacity>
                <RBSheet
                                                                        ref={refRBSheet6}
                                                                        closeOnDragDown={true}
                                                                        closeOnPressMask={true}
                                                                        customStyles={{
                                                                            wrapper: {
                                                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                                            },
                                                                            draggableIcon: {
                                                                                backgroundColor: "#000",
                                                                            }
                                                                        }}
                                                                    >
                                                                        <PrimePrograms />
                                                                    </RBSheet>
                <TouchableOpacity style={style.btn}
                    onPress={() => refRBSheet7.current.open()} underlayColor='#fff'
                    color="#E1ECF4"
                    accessibilityLabel="Learn more about this purple button"
                ><Text style={{color:'#000', fontSize:12}}>Sort by: Featured <Image source={require('../assets/images/arrow.png')} style={{width:20,height:20}}/></Text></TouchableOpacity>
                <RBSheet
                                                        ref={refRBSheet7}
                                                        closeOnDragDown={true}
                                                        closeOnPressMask={true}
                                                        customStyles={{
                                                            wrapper: {
                                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                            },
                                                            draggableIcon: {
                                                                backgroundColor: "#000",
                                                            }
                                                        }}
                                                    >
                                                        <ShopBy />
                                                    </RBSheet>
                </ScrollView>
            </View>
            <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center', backgroundColor:'#fff'}}>
                <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: 'Handpicked Laptops', image: <Image source={require('../assets/images/deals1.jpg')} style={{width:300, height:300,marginBottom:60, borderRadius:10, marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 60000})} underlayColor='#fff'>
                <View>
                    <Image source={require('../assets/images/deals1.jpg')} style={{width:'100%', height:150}} />
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                        <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                    </View>
                    <Text style={{color: 'black', marginTop:10}}>Handpicked Laptops</Text>
                    <Text style={{color: 'black'}}>and Desktops</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: 'Sony Headphones Instant Bank...', image: <Image source={require('../assets/images/deals2.jpg')} style={{width:300, height:300,marginBottom:60, borderRadius:10, marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 1100})} underlayColor='#fff'>
                <View>
                    <Image source={require('../assets/images/deals2.jpg')} style={{width:'100%', height:150}} />
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                        <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                    </View>
                    <Text style={{color: 'black', marginTop:10}}>Sony Headphones:</Text>
                    <Text style={{color: 'black'}}>Rechargeable Batteries</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{display:'flex', flexDirection: 'row', margin: 0,  alignItems: 'center', backgroundColor:'#fff'}}>

                            <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: 'Best Offers on Oppo F21s Pro', image: <Image source={require('../assets/images/deals3.jpg')} style={{width:300, height:300,marginBottom:60,marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 22000})} underlayColor='#fff'>
                            <View>
                                <Image source={require('../assets/images/deals3.jpg')} style={{width:'100%', height:150}} />
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                                    <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                                </View>
                                <Text style={{color: 'black', marginTop:10}}>Best Offers on Oppo</Text>
                                <Text style={{color: 'black'}}>F21s Pro</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: 'Best of Sports Footwear', image: <Image source={require('../assets/images/deals4.jpg')} style={{width:300, height:300,marginBottom:60, borderRadius:10, marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 800})} underlayColor='#fff'>
                            <View>
                                <Image source={require('../assets/images/deals4.jpg')} style={{width:'100%', height:150}} />
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                                    <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                                </View>
                                <Text style={{color: 'black', marginTop:10}}>Best of Sports</Text>
                                <Text style={{color: 'black'}}>Footwear</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center', backgroundColor:'#fff'}}>
                                        <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: 'Best Offer on Furniture', image: <Image source={require('../assets/images/deals5.jpg')} style={{width:300, height:300,marginBottom:60,marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 45000})} underlayColor='#fff'>
                                        <View>
                                            <Image source={require('../assets/images/deals5.jpg')} style={{width:'100%', height:150}} />
                                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                                <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                                                <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                                            </View>
                                            <Text style={{color: 'black', marginTop:10}}>Best Offer on</Text>
                                            <Text style={{color: 'black'}}>Furniture</Text>
                                        </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: 'Office Chairs & Study Desks', image: <Image source={require('../assets/images/delas6.jpg')} style={{width:300, height:300,marginBottom:60, borderRadius:10, marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 2000})} underlayColor='#fff'>
                                        <View>
                                            <Image source={require('../assets/images/delas6.jpg')} style={{width:'100%', height:150}} />
                                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                                <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                                                <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                                            </View>
                                            <Text style={{color: 'black', marginTop:10}}>Office Chairs & Study</Text>
                                            <Text style={{color: 'black'}}>Desks</Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center', backgroundColor:'#fff'}}>
                                                    <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: 'Cooking Essentials', image: <Image source={require('../assets/images/deals7.jpg')} style={{width:300, height:300,marginBottom:60,marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 200})} underlayColor='#fff'>
                                                    <View>
                                                        <Image source={require('../assets/images/deals7.jpg')} style={{width:'100%', height:150}} />
                                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                                            <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                                                            <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                                                        </View>
                                                        <Text style={{color: 'black', marginTop:10}}>Cooking Essentials</Text>
                                                        <Text style={{color: 'black'}}>Camera Batteries</Text>
                                                    </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: 'Best of Home Storage', image: <Image source={require('../assets/images/deals8.jpg')} style={{width:300, height:300,marginBottom:60, borderRadius:10, marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 400})} underlayColor='#fff'>
                                                    <View>
                                                        <Image source={require('../assets/images/deals8.jpg')} style={{width:'100%', height:150}} />
                                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                                            <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                                                            <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                                                        </View>
                                                        <Text style={{color: 'black', marginTop:10}}>Best of Home</Text>
                                                        <Text style={{color: 'black'}}>Storage</Text>
                                                    </View>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center', backgroundColor:'#fff'}}>
                                                                <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: 'Save More on Sports Nutrition', image: <Image source={require('../assets/images/deals9.jpg')} style={{width:300, height:300,marginBottom:60,marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 350})} underlayColor='#fff'>
                                                                <View>
                                                                    <Image source={require('../assets/images/deals9.jpg')} style={{width:'100%', height:150}} />
                                                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                                                        <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                                                                        <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                                                                    </View>
                                                                    <Text style={{color: 'black', marginTop:10}}>Save More on Sports</Text>
                                                                    <Text style={{color: 'black'}}>Nutrition by Muscl...</Text>
                                                                </View>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: 'Best Offers on Beauty brands-Loreal, Medimix. ', image: <Image source={require('../assets/images/deals10.jpg')} style={{width:300, height:300,marginBottom:60, borderRadius:10, marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 245})} underlayColor='#fff'>
                                                                <View>
                                                                    <Image source={require('../assets/images/deals10.jpg')} style={{width:'100%', height:150}} />
                                                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                                                        <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                                                                        <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                                                                    </View>
                                                                    <Text style={{color: 'black', marginTop:10}}>Best Offers on Beauty</Text>
                                                                    <Text style={{color: 'black'}}>brands-Loreal, Medimix.</Text>
                                                                </View>
                                                                </TouchableOpacity>
                                                            </View>
                                                            <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center', backgroundColor:'#fff'}}>
                                                                            <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: 'Starting INR 249, Digitek Camera Batteries', image: <Image source={require('../assets/images/deals2.jpg')} style={{width:200, height:200,marginBottom:60,marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 750})} underlayColor='#fff'>
                                                                            <View>
                                                                                <Image source={require('../assets/images/deals2.jpg')} style={{width:'100%', height:150}} />
                                                                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                                                                    <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                                                                                    <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                                                                                </View>
                                                                                <Text style={{color: 'black', marginTop:10}}>Starting INR 249, Digitek</Text>
                                                                                <Text style={{color: 'black'}}>Camera Batteries</Text></View>
                                                                            </TouchableOpacity>
                                                                            <TouchableOpacity style={{flex:1, margin:0, padding:10, borderWidth: .5, borderColor: 'gray'}} onPress={() => navigate('Cart', {caption: '20% off on Duracell Rechargeable Batteries', image: <Image source={require('../assets/images/deals12.jpg')} style={{width:200, height:200,marginBottom:60, borderRadius:10, marginTop:20, marginRight:'auto', marginLeft:'auto'}} />, price: 300})} underlayColor='#fff'>
                                                                            <View>
                                                                                <Image source={require('../assets/images/deals12.jpg')} style={{width:'100%', height:150}} />
                                                                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                                                                    <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:3, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                                                                                    <Text style={{fontWeight:'bold', fontSize:10, padding:2}}>Deal of the Day</Text>
                                                                                </View>
                                                                                <Text style={{color: 'black', marginTop:10}}>20% Off on Duracell</Text>
                                                                                <Text style={{color: 'black'}}>Rechargeable Batteries</Text>
                                                                            </View>
                                                                            </TouchableOpacity>
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
    btn: {
        paddingLeft:8,
        paddingRight:8,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: '#fff',
        margin:5,
        marginBottom:10,
        borderWidth: 0.5,
        borderColor: 'gray'
    },
    linearGradient: {
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 0,
        },
    input: {
                    backgroundColor: "#fff",
                    height: 20,
                    margin: 12,
                    width: '98%',
                    marginRight: 5,
                    padding: 10,
                    marginLeft:5,
                    elevation: 5,
        },
});

export default Alexa;