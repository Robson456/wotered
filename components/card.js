import React from 'react'
import {StyleSheet, View, FlatList, Image, Text} from 'react-native'

const Images=[
   { name: "plant1", id:"1", source: require('../images/plant.png')},
   { name: "plant2", id:"2", source: require('../images/plant.png')},
   { name: "plant3", id:"3", source: require('../images/plant.png')},
   { name: "plant4", id:"4", source: require('../images/plant.png')},
];

export default function card() {
    return (
        <View style={styles.container}>
            <FlatList 
            horizontal
            keyExtractor={(item) => item.id}
            data={Images}
            renderItem={ ({item}) => (
                <Image 
                    source={item.source}
                />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        width: 160,
        height: 150,
    },
    images:{
        
    },
});