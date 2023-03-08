import {MyText, MyText2} from './Cart.js';
import {Delivery} from './Delivery.js';
import React, {useState} from 'react';
import {View,Text, TouchableOpacity, StyleSheet, AsyncStorage, TextInput, Button, Image, ScrollView, NativeModules} from 'react-native';
import { RadioButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MyText1() {
    const route = useRoute();
    const [count, setCount] = useState(1);
    const [disable, disablebtn] = useState(false);
    return(

        <View style={{margin: 10}}>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:5}}>
                    <Text>{route.params.pname}</Text>
                    <Text style={{color:'#000'}}>{'\u20B9'}{route.params.price}<Text style={{color:'darkred'}}> Save: {'\u20B9'} 1,198.00 (60%)</Text></Text>
                </View>
            </View>
            <View style={{flexDirection:'column', marginTop:15}}>
                                <View style={{flexDirection:'row', borderColor:'#E1ECF4', borderBottomWidth:1, marginLeft:-15,marginRight:-15}}>
                                    <View style={{padding:10}}>
                                        <Text style={{color:'#000'}}>1 item</Text>
                                    </View>
                                    <View style={{padding:10, paddingLeft:15}}>
                                    <Text>View Details</Text>
                                    <Text>Add gift options</Text>
                                    </View>
                                    <View>
                                        <Image source={require('../assets/images/arrow.png')} style={{width:25, marginLeft:160, marginTop:15, height:25, transform: [{ rotate: '270deg'}]}}/>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row', marginLeft:-15,marginRight:-15, borderColor:'#E1ECF4', borderBottomWidth:1, paddingBottom:10, paddingTop:10}}>
                                    <View style={{padding:10}}>
                                        <Text style={{color:'#000'}}>Get it by</Text>
                                    </View>
                                    <View>
                                    <Text>Saturday, 10 Dec</Text>
                                    <Text>FREE Delivery with Prime</Text>
                                    </View>
                                    <View>
                                        <Image source={require('../assets/images/arrow.png')} style={{width:25, marginLeft:110, marginTop:15, height:25, transform: [{ rotate: '270deg'}]}}/>
                                    </View>
                                </View>
                            </View>
            <View style={{flexDirection:'row', marginTop:10}}>
            <View style={{}}>
            <Text style={{fontSize: 20, fontWeight: '400'}}>Subtotal:</Text>
            <Text style={{fontSize:20, fontWeight:'bold'}}>{'\u20B9'}{parseInt(route.params.price)*count}</Text>
            </View>
            <View style={{display:'flex', flexDirection: 'row', alignItems: 'center', marginLeft:10, marginTop:10}}>
                <View style={{width: 50, marginLeft: 20, borderRadius:10}}>
                    <Button color="teal" title="-" disabled={disable} style={{width:20}} onPress={() => {if(count <= 1){disablebtn(true)}else{setCount(count - 1);}}}></Button>
                </View>
                <Text style={{margin: 10}}>{count}</Text>
                <View style={{width: 50, borderRadius: 10}}>
                    <Button color="teal" style={{color:'#000'}} title="+" style={{width:20}} onPress={() => {setCount(count + 1); disablebtn(false)}}></Button>
                </View>
            </View></View>
        </View>

    );
}

const Payment = ({ navigation: { navigate } }) => {
    let trackingId = 0;
    const [checked, setChecked] = useState('first');
    return(
        <ScrollView style={{backgroundColor:'#fff'}}>
        <View style={{margin:10}}>
            <Text style={{fontSize: 25, color: '#000', marginLeft:10,fontWeight:'bold'}}>Select a Payment method</Text>
            <MyText1/>
            <View style={{padding:10, borderWidth:1, borderColor:'teal', borderLeftWidth:10, margin:10, borderRadius:10, backgroundColor:'#fff'}}>
                <Text>As per new RBI guidelines, some of your saved cards, may be removed. please re-enter card details and save it</Text>
            </View>
            <View style={{marginTop: 5, padding: 0, marginLeft: 10, marginRight:10}}>
                <View style={{display: 'flex', backgroundColor: '#fff', flexDirection: 'row', marginTop:5, marginBottom:5, alignItems: 'center', borderWidth:.5, borderColor:'gray',padding:10,borderRadius:10, elevation: 2}}>
                    <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                    />
                    <View style={{flexDirection:'column'}}>
                        <Text style={{color: '#000', fontWeight:'bold'}}>UPI/Netbanking</Text>
                        <Text style={{paddingTop:5,paddingBottom:5,color:'#000', fontSize:14}}>Get started with Amazon Pay UPI</Text>
                    </View>
                </View>
                <View style={{display: 'flex', backgroundColor: '#fff', flexDirection: 'row', marginTop:5, marginBottom:5, alignItems: 'center',borderWidth:.5, borderColor:'gray',padding:10,borderRadius:10, elevation: 2}}>
                    <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                    />
                    <View style={{flexDirection: 'column'}}>
                    <Text style={{color: '#000', fontWeight:'bold'}}>Pay with Debit/Credit/ATM Cards</Text>
                    <Text style={{paddingTop:5,paddingBottom:5,color:'#000', fontSize:14}}>You can save your cards as per new{'\n'}RBI guidelines</Text>
                    </View>
                </View>
                    <View style={{display: 'flex', flexDirection: 'row', backgroundColor: '#fff',marginTop:5, marginBottom:5, alignItems: 'center', borderWidth:.5, borderColor:'gray',padding:10,borderRadius:10, elevation: 2}}>
                    <RadioButton
                        value="third"
                        status={ checked === 'third' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('third')}
                    />
                    <View style={{flexDirection:'column'}}>
                    <Text style={{color: '#000', fontWeight:'bold'}}>Pay on Delivery</Text>
                    <Text style={{paddingTop:5,paddingBottom:5,color:'#000', fontSize:14}}>Scan & Pay using Amazon app ({'\u20B9'} 25{'\n'}cashback on first transaction). Cash,{'\n'}UPICards also accepted</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={style.loginScreenButton} onPress={() => {
            var resEvent1 = {
                   eventName: 'Product Purchased',
                   data: {}
            };
            NativeModules.ReReactNativeSDK.customEvent(JSON.stringify(resEvent1));
            navigate('Delivery')}} underlayColor='#fff'>
                <Text style={style.loginText}>Continue</Text>
            </TouchableOpacity>
            <Image source={require('../assets/images/payb.jpg')} style={{borderColor:'#D6D9D8', borderWidth:1,width:'95%', height:50, marginTop:20, marginRight:'auto', marginLeft:'auto'}} />
        </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    linearGradient: {
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 0,
        },

    loginScreenButton:{
        marginLeft: 'auto',
        marginRight: 'auto',
        width:350,
        marginTop:20,
        paddingTop:15,
        paddingBottom:15,
        borderRadius:10,
        backgroundColor: '#FFD700',
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:50
    },
    loginText:{
        color:'#000',
        textAlign:'center',
    },
});

const Payment1 = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Payment" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Payment" component={Payment} />
                <Stack.Screen name="Delivery" component={Delivery1} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Payment;