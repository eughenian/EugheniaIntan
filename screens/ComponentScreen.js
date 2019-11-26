import React from 'react';
import { Text, StyleSheet, View, WebView, Image } from 'react-native';

const ComponentScreen = () => {

    return (
        <View>
            <WebView
                source={{ uri: "https://www.youtube.com/channel/UCeSyZeWYKPtYOgZqlPJMyRw"}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        height: 700
    }
});

export default ComponentScreen;


