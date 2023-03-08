import {linking} from './Linking.js';
import Toast from 'react-native-toast-message';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {requestUserPermission, NotificationServices} from './src/utils/PushNotifications.js';
import ProductPage from './screens/ProductPage.js';
import Alexa from './screens/Alexa.js';
import Travel from './screens/Travel.js';
import House from './screens/House.js';
import MiniTV from './screens/MiniTV.js';
import Movies from './screens/Movies.js';
import Fashion from './screens/Fashion.js';
import Electronics from './screens/Electronics.js';
import SpeakToShop from './screens/SpeakToShop.js';
import Mobile2 from './screens/Mobile2.js';
import Mobiles from './screens/Mobiles.js';
import Delivery1 from './screens/Delivery.js';
import Payment from './screens/Payment.js';
import SignIn from './screens/Signin.js';
import SignUp from './screens/Signup.js';
import Home1 from './screens/Home.js';
import Cart from './screens/Cart.js';
import React, {useEffect} from 'react';
import {Text, View, Image, StyleSheet, Button, TouchableOpacity, BackHandler, Alert, ActivityIndicator,Linking, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const BeforeSignIn = ({ navigation: { navigate } }) => {
        useEffect(()=>{
                requestUserPermission();
                NotificationServices();
            },[])


    return(
        <View style={style.view}>

            <Image source={require('./assets/images/logo.png')} style={{marginLeft:'auto', marginRight: 'auto'}} />
            <Text style={style.text}>Sign in to your account</Text>
            <Text style={{margin: 10, paddingLeft:20, color: '#000'}}>View your wish list</Text>
            <Text style={{margin: 10, paddingLeft:20, color: '#000'}}>Find & reorder past purchases</Text>
            <Text style={{margin: 10, paddingLeft:20, color: '#000'}}>Track your purchases</Text>
            <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('SignIn')} underlayColor='#fff'>
                  <Text style={style.loginText}>Already a Customer? Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.otherButtons} onPress={() => navigate('SignUp')} underlayColor='#fff'>
                  <Text style={style.loginText}>New to amazon.in? Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.otherButtons} onPress={() => {navigate('Home');}} underlayColor='#fff'>
                  <Text style={style.loginText}>Skip sign in</Text>
            </TouchableOpacity>
        </View>
    );
}
const App = () => {
    useEffect(()=>{
                    requestUserPermission();
                    NotificationServices();
                },[])
    return(
        <NavigationContainer linking={linking} fallback={<ActivityIndicator color="blue" size="large"/>}>
                  <Stack.Navigator initialRouteName="BeforeSignIn" screenOptions={{
                                                               headerShown: false
                                                             }}>
                    <Stack.Screen name="BeforeSignIn" component={BeforeSignIn} />
                    <Stack.Screen name="Home1" component={SignIn} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Home" component={Home1} />
                    <Stack.Screen name="Cart" component={Cart} />
                    <Stack.Screen name="Payment" component={Payment} />
                    <Stack.Screen name="Delivery" component={Delivery1} />
                    <Stack.Screen name="Electronics" component={Electronics} />
                    <Stack.Screen name="Fashion" component={Fashion} />
                    <Stack.Screen name="Movies" component={Movies} />
                    <Stack.Screen name="Mobiles" component={Mobiles} />
                    <Stack.Screen name="MiniTV" component={MiniTV} />
                    <Stack.Screen name="House" component={House} />
                    <Stack.Screen name="Travel" component={Travel} />
                    <Stack.Screen name="Alexa" component={Alexa} />
                    <Stack.Screen name="SpeakToShop" component={SpeakToShop} />
                    <Stack.Screen name="ProductPage" component={ProductPage} />
                  </Stack.Navigator>
                </NavigationContainer>
    );
}
const style = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#000'
    },
    loginScreenButton:{
        marginRight:10,
        marginLeft:10,
       marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:10,
        borderWidth: 1,
                  borderColor: '#000',
        backgroundColor: '#FFD700'
      },
      loginText:{
          color:'#000',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      },
      otherButtons: {
          marginRight:10,
          marginLeft:10,
          marginTop:10,
          paddingTop:10,
          paddingBottom:10,
          borderRadius:10,
          borderWidth: 1,
          borderColor: '#000',
          backgroundColor: '#E1ECF4'
      }
});


export default App;