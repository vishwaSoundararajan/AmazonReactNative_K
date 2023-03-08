import React from 'react';
import {View,Text, TouchableOpacity, Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const ProductPage = () => {
    const route = useRoute();
    var title1 = route.params.title1;
    var title2 = route.params.title2;
    var title3 = route.params.title3;
    var title4 = route.params.title4;
    var image1 = route.params.First1;
    var image2 = route.params.First2;
    var image3 = route.params.First3;
    var image4 = route.params.First4;
    var price1 = route.params.FirstPrice;
    var price2 = route.params.SecondPrice;
    var price3 = route.params.ThirdPrice;
    var price4 = route.params.FourthPrice;
    return(
        <View>
            <View style={{flexDirection: 'row'}}>
            <Product image={image1} title={title1} price={price1} style={{flex:1}} />
            <Product image={image2} title={title2} price={price2} style={{flex:1}}/>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Product image={image3} title={title3} price={price3} />
            <Product image={image4} title={title4} price={price4} />
            </View>
        </View>
    );
}
const Product = (props) => {
    return(

        <TouchableOpacity>
            <Image source={props.image} style={{width:100, height:100}} />
            <Text>{props.title}</Text>
            <Text>{props.price}</Text>
        </TouchableOpacity>
    );
}
export default ProductPage;