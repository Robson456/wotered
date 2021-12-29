import {StyleSheet, View, Text} from 'react-native'
import Card from '../components/card'


export default function Details() {
    return (
        <View style={styles.container}>
            <Text>Details about plantas</Text>
        <Card/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontSize: 60,
        
    },

});