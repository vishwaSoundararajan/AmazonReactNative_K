import Home1 from './Home.js';
import React, { useRef } from 'react';
import {Text,View,Image, Button, TouchableOpacity, ScrollView, StyleSheet, NativeModules} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Delivery = ({ navigation: { navigate } }) => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const refRBSheet = useRef();
    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
    return(
        <View style={{backgroundColor: '#fff'}}>
            <View style={{backgroundColor:'#fff',margin: 20, padding: 20, borderColor: 'black', borderWidth: 1}}>
                <Text style={{fontSize: 25,color:'#000', fontWeight:'300'}}>Your Product will deliver Soon</Text>
                <Text>Tracking ID: 1234567890</Text>
            </View>
            <View style={{padding: 10,marginTop: -20, marginLeft: 20, marginRight: 20, backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => refRBSheet.current.open()} underlayColor='#fff'>
                    <Image source={require('../assets/images/l1.jpg')} style={{height: 85, width: 85}} />
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
                    <SecurePayment />
                </RBSheet>
                <TouchableOpacity onPress={() => refRBSheet1.current.open()} underlayColor='#fff'>
                    <Image source={require('../assets/images/l2.jpg')} style={{height: 85, width: 85}} />
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
                            backgroundColor: "#000",
                        }
                    }}
                >
                    <AmazonDelivered />
                </RBSheet>
                <TouchableOpacity onPress={() => refRBSheet2.current.open()} underlayColor='#fff'>
                    <Image source={require('../assets/images/l3.jpg')} style={{height: 85, width: 85}} />
                </TouchableOpacity>
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
                    <NoContactDelivery />
                </RBSheet>
            </View>
            <TouchableOpacity style={style.loginScreenButton} onPress={() => {
                var location = {
                 latitude: 13.067439,
                 longitude: 80.237617
                }
                 NativeModules.ReReactNativeSDK.locationUpdate(JSON.stringify(location));
                navigate('Home');
            }} underlayColor='#fff'>
                <Text style={style.loginText}>Continue Shopping</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    loginScreenButton:{
        marginRight:10,
        marginLeft:10,
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        borderRadius:10,
        backgroundColor: '#FFD600'
    },
    loginText:{
        color:'#000',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    }
});

const SecurePayment = () => {
    return(
        <View style={{padding: 20, height:'100%'}}>
            <Text style={{fontWeight:'bold', paddingBottom: 20,color:'#000'}}>Secure Payment</Text>
            <View style={{backgroundColor: '#E1ECF4', height:5}}></View>
            <Text style={{marginTop: 20,color:'#000'}}>We work hard to protect your security and privacy. Our payment security system encrypts your information during transmission.{'\n'}{'\n'}We don't share your credit card details with third-party sellers, and we don't sell your information to others.</Text>
        </View>
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

const NoContactDelivery = () => {
    return(
        <ScrollView>
            <View style={{padding: 20, height:'100%'}}>
                <Text style={{fontWeight:'bold', paddingBottom: 20,color:'#000'}}>No-Contact Delivery</Text>
                <View style={{backgroundColor: '#E1ECF4', height:5}}></View>
                <Text style={{marginTop: 20,color:'#000'}}>Delivery Associate will place the order on your doorstep and step back to maintain a 2-meter distance.{'\n'}{'\n'}No Customer signatures are required at the time of delivery{'\n'}{'\n'}For Pay-on-Delivery orders, we recommend paying using Credit card/Debit card/Netbanking via the pay-link sent via SMS at the time of delivery. To pay by cash, place cash on top of the delivery box and step back.</Text>
            </View>
        </ScrollView>
    );
}

const Delivery1 = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Delivery" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Delivery" component={Delivery1} />
                <Stack.Screen name="Home" component={Home1} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Delivery;