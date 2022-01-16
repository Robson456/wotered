import React from 'react'
import {StyleSheet, View, ImageBackground, Text, Pressable, FlatList, TouchableOpacity, Image} from 'react-native';


const bgImage = {uri: 'https://lh3.googleusercontent.com/Bnc1qB0B-CtSgVpmzQSRrDBp3hXVNZvzYYlwmEovlLAXeCNDWVwTV03mmVhqpVTPPBS6TdKBy5IMspu6mmgIYcN39emnls4lHgm-R7v5fX3S3v585xdznP70ZszWFuMhS90FwLgGx-7C_oAaWod6gWF7N3uphJfbCsOZ6kPPJvdITTv2PmRLoopgErkOSN8ia8vWP92-Ulhb0vmMDlf08Dmi6bsquU1US56Ashp1xe4tXdo4dBz2WQcs0PwylvXUXN_5Ng-FP9HkSMJli3Y4JR1WsN2nu1_hM-qwM6K95r_3_yTeJaTaarkd-ljmXtVRmSA4xrLPzmngZ9j7f4rKnS8J_UvnGoyXa1JMFE-pROI2vL-xz8eI7dg798Uo795zbyhoqi-RbNV6PJmLxMzVdX_xBIns0v7-KqsaH2GfcCWq1SajhaCo4_59aPcOahZW8hAnjctcXsT4SsovegEo_fdNTd6U9PNeP1D_GjKOF-oc71AmLZb-h6ZQvuUH2-q69X8CBxn1m8JmvxjYmG3MnFin7vTOdr-6VB80t06WbgxRFMECQ7dvrb3ZqmM_qNdbkp4KH0kuISg617OYXtNRwjmNO5ll9f0xVcnFTP2OlWM9Ta7zlrB61hpVVd6rbIPr3RCNiFwewu0hKFnUFky0FhmxTbVFEggbIAaRW0BozSCi1tbRhtH9p7XDHch0U--XA0iPbVxr5A3cZeR0Vypm3dZz=w611-h915-no?authuser=0'};


const Images=[
    { name: "plant1", description:"1lorem ipsum dolores es sum", id:"1", source: require('../images/plant.png')},
    { name: "plant2",description:"2lorem ipsum dolores es sum", id:"2", source: require('../images/plant.png')},
    { name: "plant3",description:"3lorem ipsum dolores es sum", id:"3", source: require('../images/plantv2.jpg')},
   { name: "plant4",description:"4lorem ipsum dolores es sum", id:"4", source: require('../images/plant.png')},
   { name: "plant5",description:"4lorem ipsum dolores es sum", id:"5", source: require('../images/plant.png')},
   { name: "plant6",description:"4lorem ipsum dolores es sum", id:"6", source: require('../images/plant.png')},
];

export default function home( {navigation} ) {
    return (
        <ImageBackground source={bgImage} resizeMode='cover' style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.headline}>My Plants </Text>
            </View>
            <FlatList 
            horizontal
            keyExtractor={(item) => item.id}
            data={Images}
            renderItem={ ({item}) => (
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Details',item )}  >
                        
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
            <Pressable
                style={styles.Button}
                onPress={() => navigation.navigate('Add')}
                >
                <Text>Add</Text>
            </Pressable>
        </ImageBackground>
        
    )

}
const styles = StyleSheet.create({
    image:{
        flex: 1,
    },
    Button:{
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#82FFB4',
        borderRadius: 50,
        width: 60,
        height: 60,
        margin: 15,


    },
    images:{
        height: 300,
        width: 200,
        margin: 10,
    },

        
    container: {
        alignItems: 'center',
        fontSize: 60,
        padding: 10,
         
    },

    headline:{
        fontSize: 55,
        alignSelf: 'flex-start',

    },  

});