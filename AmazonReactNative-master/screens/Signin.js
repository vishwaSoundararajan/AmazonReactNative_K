import Home1 from './Home.js';
import SignUp from './Signup.js';
import React, {useState} from 'react';
import {View, Text, Image, Button,TouchableOpacity, StyleSheet, TextInput, NativeModules} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const SignIn = ({ navigation: { navigate } }) => {
    const [email1, setEmail1] = useState('');
    const [pass1, setPass1] = useState('');
    const [err1, setErr1] = useState('');
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('useremail', email1);
        } catch (e) {
            // saving error
        }
    }
    return(
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style = {{backgroundColor: '#fff'}}>
                <Image source={require('../assets/images/logo1.png')} style={{height: 200,marginLeft:'auto', marginRight: 'auto', marginTop: -60}} />
                <Text style={{paddingLeft: 20, fontSize: 20, marginTop: -50, color: '#000'}}>Welcome</Text>
                <TouchableOpacity style={style.otherButtons} onPress={() => navigate('SignUp')} underlayColor='#fff'>
                    <Text style={style.loginText}>Create an Account - New to Amazon?</Text>
                </TouchableOpacity>
                <Text style={{paddingLeft: 20, fontSize: 15, marginTop:10, color: '#000'}}>Sign in. Already a customer?</Text>
                <Text style={{paddingLeft: 20, fontSize: 15, marginTop:20, color: '#000', fontWeight: 'bold'}}>Email or phone number *</Text>
                <TextInput style={style.input} onChangeText={(value) => setEmail1(value)}></TextInput>
                <Text style={{paddingLeft: 20, fontSize: 15, marginTop:5, color: '#000', fontWeight: 'bold'}}>Password *</Text>
                <TextInput style={style.input} secureTextEntry={true} onChangeText={(value) => setPass1(value)}></TextInput>
                <Text style = {{marginLeft:20, color: 'red'}}>{err1}</Text>
                <TouchableOpacity style={style.loginScreenButton} onPress={() => {
                    if(email1.length == 0 || pass1.length == 0){
                        setErr1('*Enter all details')
                    }
                    else{
                        storeData();
                        navigate('Home');
                        var userData = {
                            uniqueId: "1",
                            name: "karthik1",
                            age: "22",
                            email: "karthikrathinavel@email.com",
                            phone: "1234567890",
                            gender: "M",
                            profileURL: "https://github.com/karthikrathinavel",
                            dob: "26/01/2001",
                            education: "B.E",
                            employed: false,
                            married: false,
                            token: "fKJrEVn3TdiyrreUwAH7yo:APA91bGfzigbBvhOSUJxgtUYbvXYb3yWSInGCkAtZcjQDHHFfHeRjr-VgZOIAViU5SZ-msyc3XsLOY4D7NniOBmFiFF15fMnMncJeqNPs3mDI1rud97s6xa6cchpUZ3P6m72Eocvmrer"
                        };
                        NativeModules.ReReactNativeSDK.userRegister(JSON.stringify(userData));
                    }
                    }
                } underlayColor='#fff'>
                    <Text style={style.loginText}>Continue</Text>
                </TouchableOpacity>
                <Text style={{paddingLeft: 20, marginTop:10, color: '#000', paddingRight:20}}>By continuing, you agree to Amazon Conditions of use and Privacy Notice</Text>
                <View style={{height: 0.5, backgroundColor: 'black', marginTop:20,}}></View>
                <View style={{marginTop:20, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Text>Condition of use</Text>
                    <Text>Privacy Notice</Text>
                    <Text>Help</Text>
                </View>
                <Text style={{textAlign: 'center', marginTop: 20}}>@1995-2022 amazon.com</Text>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
    },
    loginText:{
        color:'#000',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    }
});

const Signin1 = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={Home1} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default SignIn;