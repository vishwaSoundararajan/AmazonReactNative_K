import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

const SpeakToShop = () => {
    return(
        <View style={{flex:1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 25}}>Try asking...</Text>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>"Alexa, Search for electronics"</Text>
            <ActivityIndicator style={{marginTop: 20}}/>
        </View>
    );
}

export default SpeakToShop;