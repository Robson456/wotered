import {StyleSheet, View, Text, Image, Button} from 'react-native'


export default function Details(props) {

    return (
        <View style={styles.container}>
            <Image
            style={styles.images}
            source={ require('../images/plant.png')}
            />
            <Text style={styles.text}>{ props.route.params.name}</Text>
            <Text style={styles.textDescription}>{ props.route.params.description}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontSize: 60,
        
    },
    images:{
        height: 300,
        width: 200,
        margin: 10,
    },
    text:{
        fontSize: 24,
    
    },
    textDescription:{
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        padding: 10,
    },

});