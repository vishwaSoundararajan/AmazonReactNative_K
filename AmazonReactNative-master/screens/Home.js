
import Fashion from './Fashion.js';
import ProductPage from './ProductPage.js';
import LinearGradient from 'react-native-linear-gradient';
import Delivery1 from './Delivery.js';
import Mobile2 from './Mobile2.js';
import Prime1 from './Prime1.js';
import Cart from './Cart.js';


import React from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, ScrollView, ImageBackground, Icon} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useRoute, useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Home = ({ navigation: { navigate } }) => {
    const renderItem = ({ item }) => (
        <View>
            {/*<Item image={item.image} />*/}
            <Item title={item.title} />
        </View>
    );
    const Item = ({ title,id, image}) => (

        <TouchableOpacity style={{backgroundColor: '#fff', flexDirection:'column'}} onPress = {() => {
            if(title == "Mobiles"){navigate('Mobiles', {caption: title});}
            if(title == "Electronics"){navigate('Electronics',{caption: title});}
            if(title == "Fashion"){navigate('Fashion', {caption: title});}
            if(title == "Books"){navigate('Movies', {caption: title});}
            if(title == "Beauty"){navigate('MiniTV', {caption: title});}
            if(title == "Home"){navigate('House', {caption: title});}
            if(title == "Essentials"){navigate('Travel', {caption: title});}
            if(title == "Deals"){navigate('Alexa', {caption: title});}
        }}>

                {/*<Image source={image} style={{width:40, height:50, marginLeft:'auto', marginRight:'auto', zIndex:0}}/>*/}
                <Text style={[{paddingTop:5, paddingLeft:10, paddingRight:10,marginBottom:10, fontWeight:'300', color:'#000', zIndex:0}]}>{title}</Text>

        </TouchableOpacity>
    );
    return(
        <ScrollView style={{backgroundColor: '#D6D9D8'}}>
            <View>
                <LinearGradient colors={['#97b1c4', '#E1ECF4']} style={style.linearGradient}>
                <View>
                    <TextInput style={style.input} placeholder="Search Amazon.in"></TextInput>
                </View>
                </LinearGradient>
                <View style={{paddingLeft: 15, padding: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#E1ECF4'}}>
                    <Image source={require('../assets/images/pin.png')} style={{width:20,height:20, marginRight: 10}} />
                    <Text style={{flex:2, color:'#000', fontWeight:'400'}}>Select a location to see product availability</Text>
                </View>
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    {/*<FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={[
                              {key: 'Devin', image: require('../assets/images/1.jpg')},
                              {key: 'Dan', image: require('../assets/images/2.jpg')},
                              {key: 'Dominic', image: require('../assets/images/3.jpg')},
                              {key: 'Jackson', image: require('../assets/images/1.jpg')},
                              {key: 'James', image: require('../assets/images/1.jpg')},
                              {key: 'Joel', image: require('../assets/images/1.jpg')},
                              {key: 'John', image: require('../assets/images/1.jpg')},
                              {key: 'Jillian', image: require('../assets/images/1.jpg')},
                              {key: 'Jimmy', image: require('../assets/images/1.jpg')},
                              {key: 'Julie', image: require('../assets/images/1.jpg')},
                            ]}
                            renderItem={({item}) => <View style={{padding:10, backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}><Image source={item.image} style={{width:50,height:50}}/><Text style={{fontWeight:'bold'}}>{item.key}</Text></View>}
                          />*/}
                </View>
                <Image source={require('../assets/images/bannernew.jpg')} style={{width:'100%',height:200}}/>
                {/*<ScrollView horizontal={true} pagingEnabled snapToAlignment="center">
                <Image source={require('../assets/images/bannernew.jpg')} style={{width:'100%',height:200}}/>
                <Image source={require('../assets/images/banner.jpg')} style={{width:'100%',height:200}}/>
                </ScrollView>*/}
                <View style={{height: 205}}><LinearGradient colors={['#CDD5D5', '#EEE9E8']} style={style.linearGradient}></LinearGradient></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{position: 'absolute', top: 325}}>
                    <View style={{padding: 5, backgroundColor: '#fff', marginLeft:10, marginTop:10, marginRight:10, borderRadius:5, elevation: 15, marginBottom:10}}>
                        <View style={{display:'flex', flexDirection: 'row'}}>
                            <View><Image source={require('../assets/images/payn1.jpg')} style={{width:60, height:60, margin:10, borderRadius:30}}/><Text style={{color: '#000', fontWeight:'300',textAlign: 'center', fontSize: 10, marginTop:-10}}>Amazon Pay</Text></View>
                            <View><Image source={require('../assets/images/payn2.jpg')} style={{width:60, height:60, margin:10, borderRadius:30}}/><Text style={{color: '#000',fontWeight:'300',textAlign: 'center', fontSize: 10, marginTop:-10}}>Send Money</Text></View>
                        </View>
                        <View style={{display:'flex', flexDirection: 'row', marginTop:5}}>
                            <View><Image source={require('../assets/images/payn3.jpg')} style={{width:60, height:60, margin:10}}/><Text style={{fontWeight:'300',color: '#000',textAlign: 'center', fontSize: 10, marginTop:-10}}>Scan any QR</Text></View>
                            <View><Image source={require('../assets/images/payn4.jpg')} style={{width:60, height:60, margin:10}}/><Text style={{fontWeight:'300',color:'#000', textAlign: 'center', fontSize: 10, marginTop:-10}}>Pay Bills</Text></View>
                        </View>
                    </View>
                    <View style={{padding: 1, backgroundColor: '#fff', marginTop:10, marginRight:10, borderRadius:5, elevation: 15, marginBottom:10}}>
                        <Image source={require('../assets/images/hd1.jpg')} style={{width:145, height:200, borderRadius:5}}/>
                    </View>
                    <View style={{padding: 1, backgroundColor: '#fff', marginTop:10, marginRight: 10, borderRadius:5, elevation: 15, marginBottom:10}}>
                        <Image source={require('../assets/images/hd2.jpg')} style={{width:145, height:200, borderRadius:5}}/>
                    </View>
                    <View style={{padding: 1, backgroundColor: '#fff', marginTop:10, marginRight:10, borderRadius:5, elevation: 15, marginBottom:10}}>
                        <Image source={require('../assets/images/hd3.jpg')} style={{width:145, height:200, borderRadius:5}}/>
                    </View>
                    <View style={{padding: 1, backgroundColor: '#fff', marginTop:10, marginRight: 10, borderRadius:5, elevation: 15, marginBottom:10}}>
                        <Image source={require('../assets/images/hd4.jpg')} style={{width:145, height:200, borderRadius:5}}/>
                    </View>
                </ScrollView>
                <View style={{margin:10, backgroundColor: '#fff', marginLeft:-10, marginTop:0, marginRight:-10}}>
                    <View style={{display: 'flex', flexDirection: 'row', marginLeft:10, marginRight:10}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                            <Image source={require('../assets/images/sm1.jpg')} style={{width:40, height:40, marginTop:8}}/>
                            <Text style={{fontSize:12, marginTop:14, fontWeight: 'bold', color:'black'}}>PAY ON{'\n'}DELIVERY</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginRight:20}}>
                            <Image source={require('../assets/images/sm2.jpg')} style={{width:40, height:40, marginTop:8}}/>
                            <Text style={{color:'black',fontSize:12, marginTop:14, fontWeight: 'bold'}}>EASY{'\n'}RETURNS</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', marginRight:30, justifyContent: 'center'}}>
                            <Image source={require('../assets/images/sm3.jpg')} style={{width:40, height:40, marginTop:8}}/>
                            <Text style={{fontSize:12, marginTop:14, fontWeight: 'bold', color:'black'}}>FREE DELIVERY{'\n'}ON FIRST ORDER</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../assets/images/ad.jpg')} style={{width:'100%', height:350, marginTop:3}}/>
                    </View>
                    <View>
                        <Image source={require('../assets/images/watchfree.jpg')} style={{width:'100%', height:40, marginBottom:8, marginTop:-8}}/>
                    </View>
                </View>
                <View style={{paddingLeft: 20, color: '#000', paddingTop: 20, paddingRight:20, backgroundColor: '#fff', paddingBottom: 30, marginTop:-5}}>

                        <Text style={{fontSize: 20, fontWeight: '300', color:'#000',lineHeight:30}}>Starting {'\u20B9'} 199 | Deals on fashion,{'\n'}beauty, kitchen & more</Text>
                        <TouchableOpacity onPress={()=>navigate('Cart',{caption: 'Sports Footwear', image: <Image source={require('../assets/images/ff2.jpg')} style={{width:300, height:300,marginBottom:60, borderRadius:10, marginTop:20}} />, price: 3000})}>
                        <Image source={require('../assets/images/ff2copy.jpg')} style={{width:'100%',height: 200, marginLeft: 'auto', marginRight:'auto', marginTop: 0, paddingTop:-10, marginBottom:10}} />
                        </TouchableOpacity>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{flex:1, backgroundColor: '#B00020', paddingLeft:5, paddingTop:5, paddingBottom:5, paddingRight:0, color: '#fff', borderRadius: 0, fontSize:12}}>Up to 53% off</Text>
                            <Text style={{padding: 5, flex:2.8, fontWeight: 'bold', fontSize:10, color:'#B00020'}}>Deal of the Day</Text>
                        </View>
                        <Text style={{paddingTop:5, fontSize:15, fontWeight:'300', color:'black'}}>Best of Sportswear</Text>

                    <TouchableOpacity onPress={()=>navigate('Alexa', {caption: "All deals"})}>
                        <Text style={{paddingTop:20, marginBottom:-15, fontWeight:'350'}}>See all deals</Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity style={style.loginScreenButton} onPress={() => navigate("Cart", { caption: <Text>HP 15s-Fr2514tu Intel Core i3 11th Gen (15.6 inch, 8GB, 256GB, Window 11 Home)</Text>, image: <Image source={require('../assets/images/p1.jpeg')} style={{width:300,height: 300, marginLeft: 'auto', marginRight:'auto', marginTop: 20, marginBottom:20}} />, price: 75000 })} underlayColor='#fff'>
                        <Text style={style.loginText}>View</Text>
                    </TouchableOpacity>*/}
                </View>
                {/*<View style={{marginTop:5, paddingRight:20, paddingLeft:20, backgroundColor: '#fff'}}>
                    <Text style={{fontSize:20, paddingBottom:15, paddingTop:15, fontWeight:'300', color:'#000'}}>Pocket friendly stores</Text>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                        <View style={{flexDirection: 'column', marginRight:5}}>
                            <Image source={require('../assets/images/pf1.jpg')} style={{width:175, height:175}}/>
                            <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>Top picks under {'\u20B9'} 199</Text>
                        </View>
                        <View style={{flexDirection: 'column', marginLeft:5, marginBottom:15}}>
                            <Image source={require('../assets/images/pf2.jpg')} style={{width:175, height:175}}/>
                            <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>Top picks under {'\u20B9'} 199</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        <View style={{flexDirection:'column', marginRight:5}}>
                            <Image source={require('../assets/images/pf3.jpg')} style={{width:175, height:175}}/>
                            <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>Top picks under {'\u20B9'} 399</Text>
                        </View>
                        <View style={{flexDirection:'column', marginLeft:5}}>
                            <Image source={require('../assets/images/pf4.jpg')} style={{width:175, height:175}}/>
                            <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>Top picks under {'\u20B9'} 499</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>null}>
                         <Text style={{paddingTop:10, paddingBottom:10, fontWeight:'300', color:'gray'}}>See more</Text>
                    </TouchableOpacity>
                </View>*/}
                <FourImage name="Clothing, footwear and more" title1="Top picks under Rs199" title2="Top picks under Rs299" title3="Top picks under Rs399" title4="Top picks under Rs499" im1 = {require('../assets/images/pf1.jpg')} im2 = {require('../assets/images/pf2.jpg')} im3 = {require('../assets/images/pf3.jpg')} im4 = {require('../assets/images/pf4.jpg')} />
                <View style={{marginTop:5, paddingRight:20, paddingLeft:20, backgroundColor: '#fff'}}>
                     <Text style={{fontSize:20, paddingBottom:15, paddingTop:10, fontWeight:'300', color: '#000'}}>Curated stores for you</Text>
                     <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                         <View style={{flexDirection: 'column', marginRight:5}}>
                             <Image source={require('../assets/images/cs1.jpg')} style={{width:175, height:70}}/>
                             <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>T-Shirts, Kurtis, sarees &{'\n'}more | Under {'\u20B9'}499</Text>
                         </View>
                         <View style={{flexDirection: 'column', marginLeft:5, marginBottom:15}}>
                             <Image source={require('../assets/images/cs2.jpg')} style={{width:175, height:70}}/>
                             <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>Bestselling Electronics |{'\n'}Under {'\u20B9'}1,999</Text>
                         </View>
                     </View>
                     <View style={{flexDirection:'row', justifyContent:'center'}}>
                         <View style={{flexDirection:'column', marginRight:5, marginBottom:15}}>
                             <Image source={require('../assets/images/cs3.jpg')} style={{width:175, height:70}}/>
                             <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>Health & personal care |{'\n'}Starting {'\u20B9'}149</Text>
                         </View>
                         <View style={{flexDirection:'column', marginLeft:5}}>
                              <Image source={require('../assets/images/cs4.jpg')} style={{width:175, height:70}}/>
                              <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>Smartphones | Starting{'\n'}{'\u20B9'}6,999</Text>
                         </View>
                     </View>
                     <View style={{flexDirection:'row', justifyContent:'center'}}>
                         <View style={{flexDirection:'column', marginRight:5, marginBottom:10}}>
                             <Image source={require('../assets/images/cs5.jpg')} style={{width:175, height:70}}/>
                             <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>Books | Under {'\u20B9'}499</Text>
                         </View>
                         <View style={{flexDirection:'column', marginLeft:5, marginBottom: 15}}>
                             <Image source={require('../assets/images/cs6.jpg')} style={{width:175, height:70}}/>
                             <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>Fitness & sports |{'\n'}Under {'\u20B9'}999</Text>
                         </View>
                     </View>
                     <View style={{flexDirection:'row', justifyContent:'center'}}>
                         <View style={{flexDirection:'column', marginRight:5, marginBottom:15}}>
                             <Image source={require('../assets/images/cs7.jpg')} style={{width:175, height:70}}/>
                             <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>Jewellery | Starting {'\u20B9'}199</Text>
                         </View>
                         <View style={{flexDirection:'column', marginLeft:5}}>
                             <Image source={require('../assets/images/cs8.jpg')} style={{width:175, height:70}}/>
                             <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>See all categories</Text>
                         </View>
                     </View>
                     <TouchableOpacity onPress={()=>null}>
                         <Text style={{paddingTop:10, paddingBottom:10, fontWeight:'300', color:'gray'}}>See more</Text>
                     </TouchableOpacity>
                </View>
                <FourImage name="Under Rs499 | Ethnic wear for women" title1="Kurtis & Kurtas" title2="Heels & sandals" title3="Earnings and Bangles" title4="Beauty" im1 = {require('../assets/images/ww1.jpg')} im2 = {require('../assets/images/ww2.jpg')} im3 = {require('../assets/images/ww3.jpg')} im4 = {require('../assets/images/ww4.jpg')} First1 = {require('../assets/images/plp1.jpg')}
                    First2 = {require('../assets/images/plp2.jpg')}
                    First3 = {require('../assets/images/plp3.jpg')}
                    First4 = {require('../assets/images/plp4.jpg')}
                    FirstTitle = "Men's Regular Fit T-Shirt"
                    SecondTitle = "Men's Regular Fit T-Shirt"
                    ThirdTitle = "Women Soft Cotton Silk"
                    FourthTitle = "Men's Regular Fit Shirt"
                    FirstPrice = '389'
                    SecondPrice = '389'
                    ThirdPrice = '265'
                    FourthPrice = '331'
                />
                <Sponsored image={require('../assets/images/sponsored1.jpg')} title="DUVON Disney Berry Care Handwash for Girls - 250m..." price= {199} simg = {require('../assets/images/spo1.jpg')} />
                <FourImage name="Clothing, footwear and more" title1="T-shirts & sarees" title2="Starting Rs99 | Skin care" title3="Under Rs499 | Footwear" title4="Watches and backpacks" im1 = {require('../assets/images/cfm1.jpg')} im2 = {require('../assets/images/cfm2.jpg')} im3 = {require('../assets/images/cfm3.jpg')} im4 = {require('../assets/images/cfm4.jpg')} />
                <Sponsored image={require('../assets/images/sponsored2.jpg')} title="GaxQuly Travel Folding Handel Temperature Iron..." price= {1049} simg = {require('../assets/images/spo2.jpg')}/>
                {/*<View style={{paddingLeft: 20, marginTop:10, color: '#000', paddingTop: 20, paddingRight:20, backgroundColor: '#fff', paddingBottom: 30}}>
                    <Text style={{fontSize: 20}}>Lenovo Ideapad Slim 3 Intel Core i3 11th Gen (15.6 inch, 8GB, 256GB, Windows 11)</Text>
                    <Image source={require('../assets/images/p2.jpeg')} style={{width:300,height: 300, marginLeft: 'auto', marginRight:'auto', marginTop: 20, marginBottom:20}} />
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{flex:1, backgroundColor: 'red', padding:5, color: '#fff', borderRadius: 10}}>Up to 50% off</Text>
                        <Text style={{padding: 5, flex:2.8, fontWeight: 'bold'}}>Deal of the day</Text>
                    </View>
                    <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate("Cart", { caption: <Text>Lenovo Ideapad Slim 3 Intel Core i3 11th Gen (15.6 inch, 8GB, 256GB, Windows 11)</Text>, image: <Image source={require('../assets/images/p2.jpeg')} style={{width:300,height: 300, marginLeft: 'auto', marginRight:'auto', marginTop: 20, marginBottom:20}} />, price: 50000 })} underlayColor='#fff'>
                        <Text style={style.loginText}>View</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingLeft: 20, marginTop:10, color: '#000', paddingTop: 20, paddingRight:20, backgroundColor: '#fff', paddingBottom: 30}}>
                    <Text style={{fontSize: 20}}>ASUS 14 Intel Celeron (14 inch, 4GB, 256GB, Windows 11, Intel HD Graphics, FHD IPS Display)</Text>
                    <Image source={require('../assets/images/p3.jpeg')} style={{width:300,height: 300, marginLeft: 'auto', marginRight:'auto', marginTop: 20, marginBottom:20}} />
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{flex:1, backgroundColor: 'red', padding:5, color: '#fff', borderRadius: 10}}>Up to 50% off</Text>
                        <Text style={{padding: 5, flex:2.8, fontWeight: 'bold'}}>Deal of the day</Text>
                    </View>
                    <TouchableOpacity style={style.loginScreenButton} onPress={() => navigate("Cart", { caption: <Text>ASUS 14 Intel Celeron (14 inch, 4GB, 256GB, Windows 11, Intel HD Graphics, FHD IPS Display)</Text>, image: <Image source={require('../assets/images/p3.jpeg')} style={{width:300,height: 300, marginLeft: 'auto', marginRight:'auto', marginTop: 20, marginBottom:20}} />, price: 48000 })} underlayColor='#fff'>
                        <Text style={style.loginText}>View</Text>
                    </TouchableOpacity>
                </View>*/}
            </View>
        </ScrollView>
    );
}
const Sponsored = (props) => {
    const navigation = useNavigation();
    return(
        <View style={{marginTop:5}}>
            <Image source={props.image} style={{width: '100%', height:170}}/>
            <Text style={{paddingLeft:20, paddingBottom:10, backgroundColor:'#fff', color:'#000'}}>{props.title}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', paddingBottom:10}}>
                <Text style={{marginLeft:20, fontSize:20, color: 'brown'}}>{'\u20B9'} {props.price}</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Cart',{caption:props.title, price:props.price, image: <Image source={props.simg} style={{width:400, marginLeft:-20, height:200, marginBottom:40}} />})}>
                    <Text style={{backgroundColor:'orange', marginRight:20, paddingTop: 5, paddingBottom:5, paddingLeft:10, paddingRight:10, borderRadius:20, color:'#000', fontSize:10}}>Shop Now</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'flex-end', paddingRight: 10, marginTop:1, backgroundColor: '#fff'}}>
                <Text style={{color:'gray'}}>Sponsored <Image source={require('../assets/images/info.png')} style={{width:20, color:'gray', height:20}}/></Text>
            </View>
        </View>
    );
}
const FourImage = (props) => {
    const navigation = useNavigation();
    return(
        <View style={{marginTop:5, paddingRight:20, paddingLeft:20, backgroundColor: '#fff'}}>
            <Text style={{fontSize:20, paddingBottom:15, paddingTop:15, fontWeight:'300', color:'#000'}}>{props.name}</Text>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Alexa', {image1: props.First1, image2:props.First2, image3: props.First3, image4: props.First4, title1: props.FirstTitle, title2: props.SecondTitle, title3:props.ThirdTitle, title4: props.FourthTitle, price1: props.FirstPrice, price2: props.SecondPrice, price3: props.ThirdPrice, price4: props.FourthPrice})}>
                    <View style={{flexDirection: 'column', marginRight:5}}>
                        <Image source={props.im1} style={{width:175, height:175}}/>
                        <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>{props.title1}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate('Fashion', {caption:"Fashion"})}>
                    <View style={{flexDirection: 'column', marginLeft:5, marginBottom:15}}>
                        <Image source={props.im2} style={{width:175, height:175}}/>
                        <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>{props.title2}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Alexa', {image1: props.First1, image2:props.First2, image3: props.First3, image4: props.First4, title1: props.FirstTitle, title2: props.SecondTitle, title3:props.ThirdTitle, title4: props.FourthTitle, price1: props.FirstPrice, price2: props.SecondPrice, price3: props.ThirdPrice, price4: props.FourthPrice})}>
                    <View style={{flexDirection:'column', marginRight:5}}>
                        <Image source={props.im3} style={{width:175, height:175}}/>
                        <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>{props.title3}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Fashion', {caption:"Fashion"})}>
                    <View style={{flexDirection:'column', marginLeft:5}}>
                        <Image source={props.im4} style={{width:175, height:175}}/>
                        <Text style={{marginTop:5, fontWeight:'300', color: '#000'}}>{props.title4}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>null}>
                <Text style={{paddingTop:20, paddingBottom:10, fontWeight:'300', color:'gray'}}>See more</Text>
            </TouchableOpacity>
        </View>
    );
}
const Home1 = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRoute="Home" screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Cart" component={Cart1} />
                <Stack.Screen name="Electronics" component={Electronics} />
                <Stack.screen name="Mobile2" component={Mobile2} />
                <Stack.Screen name="Delivery" component={Delivery1} />
                <Stack.Screen name="ProductPage" component={ProductPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const DATA = [
    {
        id: 1,
        title: 'Mobiles',
        image: require("../assets/images/1.jpg")
    },
    {
        id: 2,
        title: 'Electronics',
        image: require("../assets/images/2.jpg")
    },
    {
        id: 3,
        title: 'Fashion',
        image: require("../assets/images/3.jpg")
    },
    {
        id: 4,
        title: 'Books',
        image: require("../assets/images/4.jpg")
    },
    {
        id: 5,
        title: 'Beauty',
        image: require("../assets/images/5.jpg")
    },
    {
        id: 6,
        title: 'Home',
        image: require("../assets/images/6.jpg")
    },
    {
        id: 7,
        title: 'Essentials',
        image: require("../assets/images/7.jpg")
    },
    {
        id: 8,
        title: 'Deals',
        image: require("../assets/images/8.jpg")
    },
];

const style = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 0,
    },
    input: {
        elevation: 10,
        backgroundColor: "#fff",
        height: 40,
        margin: 12,
        marginLeft:5,
        width: '98%',
        marginRight: 5,
        padding: 10,
        borderRadius: 10,
        boxShadow: '2px 2px black',
    },
    loginScreenButton:{
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: 'orange',
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    loginText:{
        color:'#000',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
    },
    container: {
        flex: 1,
    },
    item: {
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#000',
        width: 50,
        height: 50,
        backgroundColor: 'orange',
        marginVertical: 8,
        marginHorizontal: 10,
    },
    title: {
        color: '#000',
        fontSize: 10,
        paddingTop: 0,
        backgroundColor: 'transparent',
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 30,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:0,
        fontWeight:'bold',
        zIndex:1
    },
});
export default Home;