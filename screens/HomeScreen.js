import React from 'react';
import { Text, View, Button, ImageBackground, FlatList, StyleSheet, Image } from 'react-native';

const homepic = [
    { name: 'Fakultas Ilmu Komputer Universitas Klabat (FIK-Unklab) ini keberadaannya sangat diperlukan oleh masyarakat di Indonesia Timur, mengingat banyaknya pemekaran wilayah di daerah Indonesia Timur menjadi propinsi baru, kabupaten baru atau kotamadya baru. Kondisi ini menyebabkan daerah yang baru mekar wilayahnya ingin segera membangun, baik infrastruktur maupun sumber daya manusianya. Ini adalah peluang. FIK Unklab menyediakan tenaga terampil di bidang komputer untuk ikut berpartispasi membangun daerah Indonesia Timur. Selain itu Indonesia Timur memiliki sumberdaya alam yang melimpah, ini salah adalah potensi yang besar untuk dikembangkan oleh lulusan dari Fakultas Ilmu Komputer Unklab.',  
    imageUrl: 'http://fik.unklab.ac.id/oprs/assets/img/LogoFIK.png' },
];

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30, 
        textAlign: 'center'
    }
});

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/bg2.jpg')} style={{width: '100%', height: '100%'}}>
            <FlatList
                data={homepic}
                renderItem={({ item }) =>
                    <View style={styles.textStyle}>
                        <Image
                            style={{ width: 300, height: 100 }}
                            source={{ uri: item.imageUrl }}
                        />
                        <Text >
                            {item.name}
                        </Text>
                        <Text>
                            {item.fakultas}
                        </Text>
                    </View>
                }
                keyExtractor={item => item.name}
            />
            <View>
                <Button
                    title="Dosen/Staff"
                    onPress={() => navigation.navigate('Student')}
                />
                <Text>

                </Text>
                <Button
                    title="Tes"
                    onPress={() => navigation.navigate('Friend')}
                />
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;