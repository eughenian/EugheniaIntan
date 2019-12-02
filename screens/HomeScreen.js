import React from 'react';
import { Text, View, Button, ImageBackground, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const homepic = [
    { name: 'Fakultas Ilmu Komputer Universitas Klabat (FIK-Unklab) ini keberadaannya sangat diperlukan oleh masyarakat di Indonesia Timur, mengingat banyaknya pemekaran wilayah di daerah Indonesia Timur menjadi propinsi baru, kabupaten baru atau kotamadya baru. Kondisi ini menyebabkan daerah yang baru mekar wilayahnya ingin segera membangun, baik infrastruktur maupun sumber daya manusianya. Ini adalah peluang. FIK Unklab menyediakan tenaga terampil di bidang komputer untuk ikut berpartispasi membangun daerah Indonesia Timur. Selain itu Indonesia Timur memiliki sumberdaya alam yang melimpah, ini salah adalah potensi yang besar untuk dikembangkan oleh lulusan dari Fakultas Ilmu Komputer Unklab.',  
    imageUrl: 'http://fik.unklab.ac.id/oprs/assets/img/LogoFIK.png' },
];

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30, 
        textAlign: 'center'
    },

    card:{
        marginVertical: 10,
        marginHorizontal:20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10
      },

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
                        <TouchableOpacity style={styles.card}>
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
                        </TouchableOpacity>
                        
                        <Text>

                        </Text>
                        <TouchableOpacity style={{ borderRadius:20, marginLeft:105, width: 150,height:30, padding:20, justifyContent:'center', alignItems: 'center', backgroundColor: '#FFCE00'}} onPress={() => navigation.navigate('Friend')}>
                            <Text style={{ fontSize:18, fontWeight: 'bold', color: '#005FAA'}}>Dosen/Staff</Text>  
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{fontSize:18, fontWeight: '600', color: '#FFCE00', marginTop:5, textAlign: 'center'}}>
                            Najoan, Eughenia | Salim, Intan
                        </Text>
                    </View>
                }
                keyExtractor={item => item.name}
            />
        </ImageBackground>
    );
};

export default HomeScreen;