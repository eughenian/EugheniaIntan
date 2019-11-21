import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

const students = [
    { name: 'Andrew Tanny Liem, MT, Ph.D',  imageUrl: 'http://fik.unklab.ac.id/web/assets/frontend/images/dean.jpg' },
    { name: 'Oktoverano Lengkong, S.Kom, M.Ds',  imageUrl: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=FkuJA4sAAAAJ&citpid=1' },
    { name: 'Reymon Rotikan, MS',  imageUrl: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=YaAAcvsAAAAJ&citpid=3' },
    { name: 'Green Mandias, M.Cs',  imageUrl: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=GmSQTMYAAAAJ&citpid=1' },
    { name: 'Stenly Adam, MSc',  imageUrl: 'https://media.licdn.com/dms/image/C5603AQGAzIONprQa4g/profile-displayphoto-shrink_200_200/0?e=1579132800&v=beta&t=77ncqW1plglpC-xKQT_zR_hLeJmkTXCaWrwuJ3xyQak' },
    { name: 'Green Sandag, MS',  imageUrl: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=gpTIKhgAAAAJ&citpid=8' },
    { name: 'Andria Wahyudi, S.Kom, M.Eng',  imageUrl: 'https://i1.rgstatic.net/ii/profile.image/280823082307588-1443964848159_Q512/Andria_Wahyudi.jpg' },
    { name: 'Ir. Edson Yahuda Putra, M.Kom',  imageUrl: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=aNv5WhsAAAAJ&citpid=1' }
];

const StudentScreen = () => {
    return (
        <FlatList
            data={students}
            renderItem={({ item }) =>
                <View style={styles.textStyle}>
                    <Image
                        style={{ width: 200, height: 200 }}
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
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 100
    }
});

export default StudentScreen;