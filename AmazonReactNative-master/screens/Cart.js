import LinearGradient from 'react-native-linear-gradient';
import SpeakToShop from './SpeakToShop.js';
import { DataTable, List, FAB, TextInput } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
import Prime1 from './Prime1.js';
import Payment from './Payment.js';
import React, { useRef } from 'react'
import {View,Text, Image, TouchableOpacity, StyleSheet, ScrollView, Button, LogBox, NativeModules} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MyText() {
    const route = useRoute();
    return(
        <View style={{alignItems:'center', marginBottom:-20}}>
            <Text style={{fontWeight:'300', color:'#000'}}>
                {route.params.caption}
            </Text>
            <View>
                {route.params.image}
            </View>
        </View>
    );
}

function MyText2(){
    const route = useRoute();
    return(
        <View>
        <Text style={{fontSize:15, color:'#000', marginTop:-10, position:'absolute',top:15, left:-170}}>{'\u20B9'}</Text>
        <Text style={{fontSize:30, color:'#000', marginLeft:-160}}>
            {route.params.price}
            <Text style={{fontSize:15, color:'#000',position:'relative',top:4}}>.00</Text>

        </Text>
        </View>
    );
}

LogBox.ignoreAllLogs();
const Cart = ({ navigation: { navigate } }) => {
    LogBox.ignoreLogs(['Warning: ...']);
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const refRBSheet = useRef();
    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
    const refRBSheet3 = useRef();
    const refRBSheet4 = useRef();
    const route = useRoute();
    var name = route.params.caption;
    var price = route.params.price;
    var image = route.params.image;
    return (
        <ScrollView>

            <View style={{ flex: 1, alignItems: 'center', padding: 30, backgroundColor: '#fff' }}>
                <MyText />

                <View>
                </View>
                <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
                    {/*<Text style={{color: 'red', fontWeight: '300', fontSize: 40, marginLeft:-160}}>-20%     </Text>*/}
                    <MyText2/>

                </View>
                <Text style={{marginLeft:-225,color:'#000'}}>M.R.P: <Text style={{textDecorationLine: 'line-through'}}>{'\u20B9'}79,999.00</Text></Text>
                <Text style={{marginTop: 15, marginLeft:0, marginRight:20, color:'#000', lineHeight:20}}><Text style={{fontWeight:'bold'}}>{'\u2022'}    EMI</Text> from Rs.3,774. No Cost EMI available. EMI{'\n'}options{'\n'}Inclusive of all taxes</Text>
                <Text style={{marginTop:10, marginLeft:-280, marginBottom: -10, fontWeight: 'bold', color: 'green'}}>In Stock</Text>
                <View style={{backgroundColor:'#D4DBD9', height:5, width:'140%', paddingLeft:-100, marginTop:30}}></View>
                <View style={{flexDirection:'row', alignItems:'center', marginLeft:-260}}>
                                                        <Image source={require('../assets/images/ic1.jpg')} style={{width:50, height:50}}/>
                                                        <Text style={{fontWeight:'bold', marginLeft:10, color:'#000'}}>Offers</Text>
                                                    </View>
                <View style={{marginTop:0, marginLeft:-40, paddingLeft:30, marginRight: -30,height:250}}>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom:10}}>
                                        <View style={{elevation:3,width: 200, backgroundColor:'#fff', borderColor: '#E1ECF4', borderWidth: 1, margin: 5, padding: 10, borderRadius:10, height:120}}>
                                            <Text style={{color:'#000', fontWeight: 'bold',paddingBottom: 5}}>No Cost EMI</Text>
                                            <View style={{backgroundColor: '#E1ECF4', height: 1}}></View>
                                            <Text style={{color:'#000', paddingTop:5}}>Upto Rs.949 EMI Interest savings on Amazon Pay ICICI Bank Credit Car...</Text>
                                        </View>
                                        <View style={{elevation:3, backgroundColor:'#fff',width: 200, borderColor: '#E1ECF4', borderWidth: 1, margin: 5, padding: 10, borderRadius:10, height:120}}>
                                            <Text style={{color:'#000', fontWeight: 'bold',paddingBottom: 5}}>American Express</Text>
                                            <View style={{backgroundColor: '#E1ECF4', height: 1}}></View>
                                            <Text style={{color:'#000', paddingTop:5}}>Save upto Rs.1,274 with American Express Credit Cards</Text>
                                        </View>
                                        <View style={{elevation:3, backgroundColor:'#fff', width: 200, borderColor: '#E1ECF4', borderWidth: 1, margin: 5, padding: 10, borderRadius:10, height:120}}>
                                            <Text style={{color:'#000', fontWeight: 'bold',paddingBottom: 5}}>Partner Offer</Text>
                                            <View style={{backgroundColor: '#E1ECF4', height: 1}}></View>
                                            <Text style={{color:'#000', paddingTop:5}}>Get GST invoice and save upto 28% on business purchases...</Text>
                                        </View>
                                    </ScrollView>
                                </View>
                <View style={{backgroundColor:'#D4DBD9', height:5, width:'140%', paddingLeft:-100, marginTop:-100}}></View>
                <View style={{}}>
                    <Text style={{color:'#000', paddingTop:15, paddingBottom:10}}>Available at a lower price from other sellers that may not offer free prime shipping</Text>
                    <Text style={{color:'#000', color:'#2F5A59'}}>See terms here</Text>
                </View>
                <TouchableOpacity style={style.loginScreenButton} onPress={() => {
                    var resEvent1 = {
                        eventName: 'Added to cart',
                        data: {}
                     };
                     NativeModules.ReReactNativeSDK.customEvent(JSON.stringify(resEvent1));
                    navigate('Payment', {price: price, pname: name, image:image})}
                } underlayColor='#fff'>
                    <Text style={style.loginText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.loginScreenButton1} onPress={() => {
                    var data = {
                        productName: route.params.caption
                     };
                    NativeModules.ReReactNativeSDK.appConversionTrackingWithData(JSON.stringify(data));
                    navigate('Payment', {price: price, pname: name, image: image});
                    }} underlayColor='#fff'>
                    <Text style={style.loginText}>Buy Now</Text>
                </TouchableOpacity>
                {/*<FAB style={style.fab} small label="Speak to Shop" onPress={() => refRBSheet4.current.open()}/>
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
                    <SpeakToShop />
                </RBSheet>*/}
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 15}}>
                    <TouchableOpacity onPress={() => refRBSheet.current.open()} underlayColor='#fff'>
                        <Image source={require('../assets/images/k1.jpeg')} style={{height: 75, width: 75}} />
                    </TouchableOpacity>
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
                        <PayOnDelivery />
                    </RBSheet>
                    <TouchableOpacity onPress={() => refRBSheet1.current.open()} underlayColor='#fff'>
                        <Image source={require('../assets/images/k2.jpeg')} style={{height: 85, width: 75}} />
                    </TouchableOpacity>
                    <RBSheet
                        ref={refRBSheet1}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "rgba(0,0,0,0.5)",
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                        }}
                    >
                        <SevenDaysReplacement />
                    </RBSheet>
                    <TouchableOpacity onPress={() => refRBSheet2.current.open()} underlayColor='#fff'>
                        <Image source={require('../assets/images/k3.jpeg')} style={{height: 75, width: 75}} />
                    </TouchableOpacity>
                    <RBSheet
                        ref={refRBSheet2}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "rgba(0,0,0,0.5)"
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                        }}
                    >
                        <AmazonDelivered />
                    </RBSheet>
                    <TouchableOpacity onPress={() => refRBSheet3.current.open()} underlayColor='#fff'>
                        <Image source={require('../assets/images/k4.jpeg')} style={{height: 75, width: 75}} />
                    </TouchableOpacity>
                    <RBSheet
                        ref={refRBSheet3}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "rgba(0,0,0,0.5)"
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                        }}
                    >
                        <OneYearWarranty />
                    </RBSheet>
                </View>
                <View style = {{border:'1px solid #000', backgroundColor: '#E1ECF4', padding: 10, display: 'flex', flexDirection:'row', margin:10,alignItems:'center'}}>
                                    <Image source={require('../assets/images/alexa.png')} style={{height: 100, width:100}} />
                                    <Text>Play music, hear the news, control smart home devices, and more. Just ask Alexa.</Text>
                                </View>
                {/*<View style={{backgroundColor: '#D4DBD9', height: 5, width:500,marginTop:0}}></View>*/}
            </View>
        </ScrollView>
    );
}

const Cart1 = (navigation,route) => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cart" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Payment" component={Payment} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const style = StyleSheet.create({
    loginScreenButton:{
        width:350,
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        borderRadius:25,
        backgroundColor: '#FFD700'
    },
    loginScreenButton1:{
            width:350,
            marginTop:10,
            paddingTop:15,
            paddingBottom:15,
            borderRadius:25,
            backgroundColor: '#FF9F00'
        },
    loginText:{
        color:'#000',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    fab: {
        borderRadius:10,
        width:200,
        position: 'absolute',
        margin: 16,
        marginTop: 20,
        right: 200,
        bottom: 610,
        backgroundColor: '#059AC9'
    },
    input: {
                elevation: 10,
                        backgroundColor: "#fff",
                        height: 30,
                        margin: 12,
                        width: '98%',
                        marginRight: 10,
                        padding: 10,
                        borderRadius: 10,

            },
    linearGradient: {
                flex: 1,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 0,
            },
});

const PayOnDelivery = () => {
    return(
        <View style={{padding: 20, height:'100%'}}>
            <Text style={{fontWeight:'bold', paddingBottom: 20,color:'#000'}}>What is Pay on Delivery</Text>
            <View style={{backgroundColor: '#E1ECF4', height:5}}></View>
            <Text style={{marginTop: 20,color:'#000'}}>Pay on Delivery (Cash/Card) payment method includes Cash on Delivery (COD) as well as Debit card / Credit card / Net banking payments at your doorstep</Text>
        </View>
    );
}

const SevenDaysReplacement = () => {
    return(
        <ScrollView>
            <View style={{padding: 20, height:'100%'}}>
                <Text style={{fontWeight:'bold', paddingBottom: 20,color:'#000'}}>7 Days Replacement</Text>
                <DataTable style={style.container}>
                    <DataTable.Header style={{backgroundColor: '#E1ECF4'}}>
                        <DataTable.Title>Return Reason</DataTable.Title>
                        <DataTable.Title>Return Period</DataTable.Title>
                        <DataTable.Title>Return Policy</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>Reason</DataTable.Cell>
                        <DataTable.Cell>7 days</DataTable.Cell>
                        <DataTable.Cell>Replacement</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
                <View style={{backgroundColor: '#E1ECF4', height:5}}></View>
                <Text style={{marginTop: 20,color:'#000'}}>We will need you to submit proof of issue to verify your replacement request</Text>
                <Text style={{marginTop: 20,color:'#000'}}><Text style={{fontWeight:'bold'}}>Defective: </Text><Text>Verification by Brand or Amazon, through on-call support followed by inspection at your location or nearest brand service center if required.</Text></Text>
                <Text style={{marginTop: 20,color:'#000'}}><Text style={{fontWeight:'bold'}}>Physical Damage, Wrong, Missing Items: </Text><Text>Remote verification by Amazon</Text></Text>
            </View>
        </ScrollView>
    );
}

const AmazonDelivered = () => {
    return(
        <View style={{padding: 20, height:'100%'}}>
            <Text style={{fontWeight:'bold', paddingBottom: 20,color:'#000'}}>Amazon Delivered</Text>
            <View style={{backgroundColor: '#E1ECF4', height:5}}></View>
            <Text style={{marginTop: 20,color:'#000'}}>Amazon directly manages delivery for this product. Order delivery tracking to your doorstep is available.</Text>
        </View>
    );
}

const OneYearWarranty = () => {
    return(
        <View style={{padding: 20, height:'100%'}}>
            <Text style={{fontWeight:'bold', paddingBottom: 20,color:'#000'}}>1 Year Warranty</Text>
            <View style={{backgroundColor: '#E1ECF4', height:5}}></View>
            <Text style={{marginTop: 20,color:'#000'}}>1 year manufacturer warranty for device and in-box accessories including batteries from the date of purchase.</Text>
        </View>
    );
}

export default Cart;