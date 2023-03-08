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
            <Text style={{fontSize: 25, color: '#000'}}>{route.params.caption}</Text>
        </View>
    );
}

const Mobiles = ({ navigation: { navigate } }) => {
    return(
        <ScrollView>
            <View>
                <MyText2/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:10}}>
                    <Image source={require('../assets/images/header1.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header2.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header3.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                </ScrollView>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>1</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>2</Text>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>3</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>4</Text>
                <Text style={{margin: 20, fontWeight:'bold'}}>Offers you can't resist</Text>
                <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center'}}>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 1', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250,marginBottom:60, borderRadius:10, marginTop:20}} />, price: 20000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 2', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 18000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{display:'flex', flexDirection: 'row', marginTop: 15}}>
                    <View style={{flex:1, margin:10,backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center',color:'white'}}>OnePlus Nord 2T 5G - 3</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 3', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 16000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 4</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 4', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 14000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const Prime1 = () => {
    return(
        <View></View>
    );
}

const Electronics = ({ navigation: { navigate } }) => {
    return(
        <ScrollView>
            <View>
                <MyText2/>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>1</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>2</Text>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>3</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>4</Text>
                <Text style={{margin: 20, fontWeight:'bold'}}>Offers you can't resist</Text>
                <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center'}}>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 1', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250,marginBottom:60, borderRadius:10, marginTop:20}} />, price: 20000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 2', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 18000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{display:'flex', flexDirection: 'row', marginTop: 15}}>
                    <View style={{flex:1, margin:10,backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center',color:'white'}}>OnePlus Nord 2T 5G - 3</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 3', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 16000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 4</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 4', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 14000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const Fashion = ({ navigation: { navigate } }) => {
    return(
        <ScrollView>
            <View>
                <MyText2/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:10}}>
                    <Image source={require('../assets/images/header1.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header2.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header3.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                </ScrollView>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>1</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>2</Text>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>3</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>4</Text>
                <Text style={{margin: 20, fontWeight:'bold'}}>Offers you can't resist</Text>
                <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center'}}>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 1', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250,marginBottom:60, borderRadius:10, marginTop:20}} />, price: 20000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 2', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 18000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{display:'flex', flexDirection: 'row', marginTop: 15}}>
                    <View style={{flex:1, margin:10,backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center',color:'white'}}>OnePlus Nord 2T 5G - 3</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 3', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 16000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 4</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 4', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 14000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const Movies = ({ navigation: { navigate } }) => {
    return(
        <ScrollView>
            <View>
                <MyText2/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:10}}>
                    <Image source={require('../assets/images/header1.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header2.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header3.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                </ScrollView>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>1</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>2</Text>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>3</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>4</Text>
                <Text style={{margin: 20, fontWeight:'bold'}}>Offers you can't resist</Text>
                <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center'}}>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 1', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250,marginBottom:60, borderRadius:10, marginTop:20}} />, price: 20000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 2', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 18000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{display:'flex', flexDirection: 'row', marginTop: 15}}>
                    <View style={{flex:1, margin:10,backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center',color:'white'}}>OnePlus Nord 2T 5G - 3</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 3', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 16000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 4</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 4', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 14000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const MiniTV = ({ navigation: { navigate } }) => {
    return(
        <ScrollView>
            <View>
                <MyText2/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:10}}>
                    <Image source={require('../assets/images/header1.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header2.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header3.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                </ScrollView>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>1</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>2</Text>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>3</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>4</Text>
                <Text style={{margin: 20, fontWeight:'bold'}}>Offers you can't resist</Text>
                <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center'}}>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 1', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250,marginBottom:60, borderRadius:10, marginTop:20}} />, price: 20000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 2', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 18000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{display:'flex', flexDirection: 'row', marginTop: 15}}>
                    <View style={{flex:1, margin:10,backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center',color:'white'}}>OnePlus Nord 2T 5G - 3</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 3', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 16000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 4</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 4', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 14000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const House = ({ navigation: { navigate } }) => {
    return(
        <ScrollView>
            <View>
                <MyText2/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:10}}>
                    <Image source={require('../assets/images/header1.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header2.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header3.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                </ScrollView>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>1</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>2</Text>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>3</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>4</Text>
                <Text style={{margin: 20, fontWeight:'bold'}}>Offers you can't resist</Text>
                <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center'}}>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 1', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250,marginBottom:60, borderRadius:10, marginTop:20}} />, price: 20000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 2', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 18000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{display:'flex', flexDirection: 'row', marginTop: 15}}>
                    <View style={{flex:1, margin:10,backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center',color:'white'}}>OnePlus Nord 2T 5G - 3</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 3', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 16000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 4</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 4', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 14000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const Alexa = ({ navigation: { navigate } }) => {
    return(
        <ScrollView>
            <View>
                <MyText2/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff', padding:10}}>
                    <Image source={require('../assets/images/header1.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header2.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                    <Image source={require('../assets/images/header3.webp')} style={{borderWidth:2, borderColor:'orange',borderRadius:10,width:300, height:200, marginLeft:10, marginRight:10}}/>
                </ScrollView>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>1</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:365, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>2</Text>
                <Text style={{position: 'absolute', color: '#000', left: 15,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>3</Text>
                <Text style={{position: 'absolute', color: '#000', left: 210,top:685, fontSize:50, zIndex:100, backgroundColor:'orange', paddingRight: 10, paddingLeft:10}}>4</Text>
                <Text style={{margin: 20, fontWeight:'bold'}}>Offers you can't resist</Text>
                <View style={{display:'flex', flexDirection: 'row', margin: 0, alignItems: 'center'}}>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 1', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250,marginBottom:60, borderRadius:10, marginTop:20}} />, price: 20000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 2', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 18000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{display:'flex', flexDirection: 'row', marginTop: 15}}>
                    <View style={{flex:1, margin:10,backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center',color:'white'}}>OnePlus Nord 2T 5G - 3</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 3', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 16000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, margin:10, backgroundColor:'#000',borderRadius:0, borderColor:'orange', borderWidth: 5}}>
                        <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:150, borderRadius:10}} />
                        <Text style={{fontWeight: 'bold', textAlign:'center', color: 'white'}}>OnePlus Nord 2T 5G - 4</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature1</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature2</Text>
                        <Text style={{textAlign:'center', color: 'white'}}>Feature3</Text>
                        <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate('Cart', {caption: 'OnePlus Nord 2T 5G - 4', image: <Image source={require('../assets/images/images.webp')} style={{width:'100%', height:250, marginBottom:60, borderRadius:10, marginTop:20}} />, price: 14000})} underlayColor='#fff'>
                            <Text style={style.loginText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
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

const Prime2 = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRoute="Prime1" screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Prime1" component={Prime1}/>
                <Stack.Screen name="Cart" component={Cart1} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Prime1;