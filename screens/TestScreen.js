import React from 'react';
import { Text, View, WebView, StyleSheet, Image } from 'react-native';

const StudentScreen = () => {
    return (
        <View >
            <WebView
                source={{ url: "http://www.unklab.ac.id/id/fik/dosen-staff"}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 700
    }
});

export default StudentScreen;