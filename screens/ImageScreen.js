import React from 'react';
import { View, Image, Stylesheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text> Home Screen</Text>
            <image>
                source={require("../assets/mountain.jpg")}
            </image>
            <Button
                title="Go to Component Screen"
                onPress={() => navigation.navigate('Component')}
            />
            <Button
                title="Go to Friend Screen"
                onPress={() => navigation.navigate('Friend')}
            />
            <Button
                title="Go to Student Screen"
                onPress={() => navigation.navigate('Student')}
            />
        </View>
    );
};

export default HomeScreen;