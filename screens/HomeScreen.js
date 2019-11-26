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
        <ImageBackground source={require('../assets/bg3.jpg')} style={{width: '100%', height: '100%'}}>
            <FlatList
                data={homepic}
                renderItem={({ item }) =>
                    <View style={styles.textStyle}>
                        <Image source={require('../assets/logofik.png')} style={{width: 210, height: 210, marginLeft: 75}}/>
                        <Text style={{color:'white', fontSize: 32, fontWeight: '600', textAlign: 'center'}}>
                            COMPUTER SCIENCE
                        </Text>
                        <Text style={{fontSize:18, fontWeight: '600', color: '#FFCE00', marginTop:5, textAlign: 'center'}}>
                            UNIVERSITAS KLABAT
                        </Text>
                        <Text>

                        </Text>
                        <Text style={{fontSize:18, fontWeight: '600', color: '#FFFFFF', marginTop:5, textAlign: 'center', padding: 10}}>
                            Fakultas Ilmu Komputer Universitas Klabat (FIK-Unklab) ini keberadaannya sangat diperlukan oleh 
                            masyarakat di Indonesia Timur, mengingat banyaknya pemekaran wilayah di daerah Indonesia Timur 
                            menjadi propinsi baru, kabupaten baru atau kotamadya baru. Kondisi ini menyebabkan daerah yang 
                            baru mekar wilayahnya ingin segera membangun, baik infrastruktur maupun sumber daya manusianya. 
                            Ini adalah peluang. FIK Unklab menyediakan tenaga terampil di bidang komputer untuk ikut 
                            berpartispasi membangun daerah Indonesia Timur. Selain itu Indonesia Timur memiliki sumberdaya 
                            alam yang melimpah, ini salah adalah potensi yang besar untuk dikembangkan oleh lulusan dari 
                            Fakultas Ilmu Komputer Unklab.
                        </Text>
                        <Text>

                        </Text>
                        <Button style={{fontSize:18, fontWeight: '600', backgroundColor: '#FFCE00', marginTop:5, textAlign: 'center', borderRadius:80}}
                            title="Dosen/Staff"
                            onPress={() => navigation.navigate('Friend')}
                        />
                    </View>
                }
                keyExtractor={item => item.name}
            />
        </ImageBackground>
    );
};

export default HomeScreen;