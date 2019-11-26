import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
} from 'react-native';

export default class CompanyDescriptionView extends Component {

  constructor(props) {
    super(props);
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed ");
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logofik.png')}/>
          <Text style={styles.companyName}>COMPUTER SCIENCE</Text>
          <Text style={styles.slogan}>UNIVERSITAS KLABAT</Text>
          <View style={styles.descriptionContent}>
            <Text style={styles.description}>
            Fakultas Ilmu Komputer Universitas Klabat keberadaannya sangat diperlukan oleh masyarakat 
            di Indonesia Timur, mengingat banyaknya pemekaran wilayah di daerah Indonesia Timur menjadi propinsi baru, 
            kabupaten baru atau kotamadya baru. Kondisi ini menyebabkan daerah yang baru mekar wilayahnya ingin segera 
            membangun, baik infrastruktur maupun sumber daya manusianya. Ini adalah peluang. 
            FIK Unklab menyediakan tenaga terampil di bidang komputer untuk ikut berpartispasi membangun daerah 
            Indonesia Timur. Selain itu Indonesia Timur memiliki sumberdaya alam yang melimpah, ini salah adalah 
            potensi yang besar untuk dikembangkan oleh lulusan dari Fakultas Ilmu Komputer Unklab. 
            </Text>
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onClickListener('login')}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer:{
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#005FAA',
  },
  logo:{
    width:200,
    height:200,
    justifyContent: 'center',
    marginBottom:10,
    marginTop:30,
  },
  companyName: {
    fontSize:32,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  slogan:{
    fontSize:18,
    fontWeight: '600',
    color: '#FFCE00',
    marginTop:5,
  },
  descriptionContent:{
    padding:30
  },
  description:{
    fontSize:18,
    textAlign:'center',
    marginTop:10,
    color: '#FFFFFF',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
  },
  sendButton: {
    backgroundColor: "#FFFFFF",
  },
  buttonText: {
    color: '#005FAA',
  }
}); 