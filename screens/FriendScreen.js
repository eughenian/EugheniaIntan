import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  ScrollView
} from 'react-native';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "Andrew Tanny Liem, MT, Ph.D",
        position:"Dekan",
        image:"http://fik.unklab.ac.id/web/assets/frontend/images/dean.jpg",
        about:"Data Dosen",
        ttl:"TTL: Manila, 16 Maret 1981",
        nik:"NIK: 11060601155",
        nidn:"NIDN: 0916038101"
        },
        {id:2,  name: "Oktoverano Lengkong, S.Kom, M.Ds", 
        position:"Wakil Dekan",
        image:"https://scholar.googleusercontent.com/citations?view_op=view_photo&user=FkuJA4sAAAAJ&citpid=1",
        about:"Data Dosen",
        ttl:"TTL: Jakarta, 12 Oktober 1983",
        nik:"NIK: 11080101165",
        nidn:"NIDN: 0912108301"
        },
        {id:3,  name: "Reymon Rotikan, MS",  
        position:"Kaprodi SI", 
        image:"https://scholar.googleusercontent.com/citations?view_op=view_photo&user=YaAAcvsAAAAJ&citpid=3", 
        about:"Data Dosen",
        ttl:"TTL: Parigi, 19 September 1987",
        nik:"NIK: 21405081040",
        nidn:"NIDN: 0919098702"
        },
        {id:4,  name: "Green Mandias, M.Cs", 
        position:"Kaprodi TI",     
        image:"https://scholar.googleusercontent.com/citations?view_op=view_photo&user=GmSQTMYAAAAJ&citpid=1", 
        about:"Data Dosen",
        ttl:"TTL: Kawangkoan, 14 Februari 1981",
        nik:"NIK: 11040301144",
        nidn:"NIDN: 0904028101"
        },
        {id:5,  name: "Stenly Adam, MSc", 
        position:"Dosen",   
        image:"https://media.licdn.com/dms/image/C5603AQGAzIONprQa4g/profile-displayphoto-shrink_200_200/0?e=1579132800&v=beta&t=77ncqW1plglpC-xKQT_zR_hLeJmkTXCaWrwuJ3xyQak", 
        about:"Data Dosen",
        ttl:"TTL: Serang, 15 September 1987",
        nik:"NIK: 11130101188",
        nidn:"NIDN: 0915098707"
        },
        {id:6,  name: "Green Sandag, MS",   
        position:"Dosen", 
        image:"https://scholar.googleusercontent.com/citations?view_op=view_photo&user=gpTIKhgAAAAJ&citpid=8", 
        about:"Data Dosen",
        ttl:"TTL: Parigi, 07 Desember 1990",
        nik:"NIK: 21120810036",
        nidn:"NIDN: 0907129001"
        },
        {id:7,  name: "Andria Wahyudi, S.Kom, M.Eng",   
        position:"Dosen",           
        image:"https://i1.rgstatic.net/ii/profile.image/280823082307588-1443964848159_Q512/Andria_Wahyudi.jpg", 
        about:"Data Dosen",
        ttl:"TTL: Manado, 16 Agustus 1989",
        nik:"NIK: 21140805041",
        nidn:"NIDN: 0916088901"
        },
        {id:8,  name: "Ir. Edson Yahuda Putra, M.Kom",   
        position:"Dosen",           
        image:"http://www.unklab.ac.id/sites/default/files/2016-02/EDSON%20Y%20PUTRA.jpg", 
        about:"Data Dosen",
        ttl:"TTL: Madiun, 11 Oktober 1969",
        nik:"NIK: 196910112005011002",
        nidn:"NIDN: 0011106901"
        },
        {id:9,  name: "Jacquline Waworundeng, MT",   
        position:"Dosen",           
        image:"http://www.unklab.ac.id/sites/default/files/2016-02/waworundeng%20jacquline.jpg", 
        about:"Data Dosen",
        ttl:"TTL: Remboken, 04 November 1983",
        nik:"NIK: 11110101182",
        nidn:"NIDN: 0904118303"
        },
        {id:10,  name: "Jimmy Herawan Moedjahedy, S.Kom, MM",   
        position:"Dosen",           
        image:"http://www.unklab.ac.id/sites/default/files/2016-02/jimmy.jpg", 
        about:"Data Dosen",
        ttl:"TTL: Jayapura, 23 Desember 1986",
        nik:"NIK: 12090814144",
        nidn:"NIDN: 0923128602"
        },
        {id:11,  name: "Lidya Chitra Laoh, S.Kom., M.Si",   
        position:"Dosen",           
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAeeht9e8X5_iSscA6WOnsu5V650WqBXRm8J2JGAC0VGjVq5Md", 
        about:"Data Dosen",
        ttl:"TTL: Manado, 29 Maret 1980",
        nik:"NIK: 11020122134",
        nidn:"NIDN: 0929038001"
        },
        {id:12,  name: "Reynoldus Andrias Sahulata, MM",   
        position:"Dosen",           
        image:"http://www.unklab.ac.id/sites/default/files/2016-02/sahulata%20reynoldus.jpg", 
        about:"Data Dosen",
        ttl:"TTL: Makasar, 11 Oktober 1966",
        nik:"NIK: 111108001183",
        nidn:"NIDN: 0311106605"
        },
        {id:13,  name: "Joe Yuan Mambu, BSIT., MCIS",   
        position:"Dosen",           
        image:"https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=ikdI7KYAAAAJ&citpid=2", 
        about:"Data Dosen",
        ttl:"TTL: Jakarta, 27 Juli 1983",
        nik:"NIK: 2112010131",
        nidn:"NIDN: 0927078306"
        }
      ]
    };
  }

  clickEventListener = (item) => {
    this.setState({userSelected: item}, () =>{
      this.setModalVisible(true);
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
          
        <FlatList 
          style={styles.userList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.position}>{item.position}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Details</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>

        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.setModalVisible(false)}
          visible={this.state.modalVisible}>

          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                    <Text/>
                    <Image style={styles.image} source={{uri: this.state.userSelected.image}}/>
                    <Text/>
                    <Text style={styles.name}>{this.state.userSelected.name}</Text>
                    <Text style={styles.position}>{this.state.userSelected.position}</Text>
                    <Text/>
                    <Text style={styles.about}>{this.state.userSelected.about}</Text>
                    <Text style={styles.jadwal}>{this.state.userSelected.ttl}</Text>
                    <Text style={styles.jadwal}>{this.state.userSelected.nik}</Text>
                    <Text style={styles.jadwal}>{this.state.userSelected.nidn}</Text>
                </ScrollView>
              </View>
              <View style={styles.popupButtons}>
                <TouchableOpacity onPress={() => {this.setModalVisible(false) }} style={styles.btnClose}>
                  <Text style={styles.txtClose}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
    backgroundColor:"#005FAA"
  },
  header:{
    backgroundColor: "#00CED1",
    height:200
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    flex:1,
  },
  detailContent:{
    top:80,
    height:500,
    width:Dimensions.get('screen').width - 90,
    marginHorizontal:30,
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  userList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:30,
  },



  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:10,
    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row'
  },

  name:{
    fontSize:13,
    flex:1,
    color:"#005FAA",
    fontWeight:'bold'
  },
  position:{
    fontSize:12,
    flex:1,
    color:"#696969"
  },
  about:{
    marginHorizontal:10,
    fontSize:12
  },
  jadwal:{
    marginHorizontal:10,
    fontSize:12
  },

  followButton: {
    marginLeft: 120,
    marginTop:10,
    height:30,
    width:70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#005FAA",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:14,
  },
 /************ modals ************/
  popup: {
    backgroundColor: 'white',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 30
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height:250,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent:'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose:{
    height:20,
    backgroundColor:'#FFCE00',
    padding:20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  modalInfo:{
    alignItems:'center',
    justifyContent:'center',
  }
}); 