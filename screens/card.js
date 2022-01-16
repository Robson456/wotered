import React from 'react'
import {StyleSheet, View, FlatList, Image, TouchableOpacity, Text} from 'react-native'



export default function card() {
    return (
        <View style={styles.container}>
            <FlatList 
            horizontal
            keyExtractor={(item) => item.id}
            data={Images}
            renderItem={ ({item}) => (
                <View style={styles.container}>
                    <TouchableOpacity  >
                        
                        <Image style={styles.images}
                            source={item.source}
                            
                            />
                    </TouchableOpacity>
                    <Text style={styles.Text}>{item.name}</Text>
                    
                    <Text >{item.description}</Text>
                </View>         
                )
                
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    images:{
        height: 300,
        width: 200,
        margin: 10,
    },
    Text:{
        fontSize: 25,
        padding: 10,
        alignSelf: 'flex-start',

    }
});