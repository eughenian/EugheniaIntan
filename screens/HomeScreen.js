import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text> Home Screen</Text>
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
            <Button
                title="Go to Image Screen"
                onPress={() => navigation.navigate('Image')}
            />
        </View>
    );
};

export default HomeScreen;