import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const ShopByCategory = () => {
    return(
        <ScrollView>
            <Text style={{fontSize:15, fontWeight: 'bold', marginLeft:15, color: '#000', paddingBottom:10}}>Shop by category</Text>
            <View style={{backgroundColor:'#E1ECF4', height:1}}></View>
            <View>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Image source={require('../assets/images/sbc1.jpg')} style={style.image}/>
                        <Text style={{marginTop:5, color:'#000'}}>All Deals</Text>
                    </View>
                    <View style={{flexDirection: 'column', alignItems: 'center', paddingLeft:20, paddingRight:10}}>
                        <Image source={require('../assets/images/sbc2.jpg')} style={style.image}/>
                        <Text style={{marginTop:5, color:'#000'}}>Deal of the{'\n'}     Day</Text>
                    </View>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Image source={require('../assets/images/sbc3.jpg')} style={style.image}/>
                        <Text style={{marginTop:5, color: '#000'}}>Lightning Deals</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', marginTop:10}}>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                            <Image source={require('../assets/images/sbc4.jpg')} style={style.image}/>
                                            <Text style={{marginTop:5, color:'#000'}}>Electronics</Text>
                                        </View>
                                        <View style={{flexDirection: 'column', alignItems: 'center', paddingLeft:20, paddingRight:10}}>
                                            <Image source={require('../assets/images/sbc5.jpg')} style={style.image}/>
                                            <Text style={{marginTop:5, color:'#000'}}>Accessories</Text>
                                        </View>
                                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                            <Image source={require('../assets/images/sbc6.jpg')} style={style.image}/>
                                            <Text style={{marginTop:5, color:'#000'}}>Mobiles</Text>
                                        </View>
                </View>
            </View>

        </ScrollView>
    );
}

const style = StyleSheet.create({
    image: {
        width:80,
        height: 80,
    }
});

export default ShopByCategory;