import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

const students = [
    { name: 'flower',  imageUrl: 'https://cdn.theatlantic.com/assets/media/img/mt/2017/10/Pict1_Ursinia_calendulifolia/lead_720_405.jpg?mod=1533691909' },
    { name: 'tree',  imageUrl: 'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/03091106/Trees-1024x682.jpg' },
    { name: 'fruit',  imageUrl: 'https://basket.com/wp-content/uploads/2018/07/What-Your-Favorite-Fruit-Says-About-You.jpg' }
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