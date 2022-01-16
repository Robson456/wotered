import {StyleSheet, View, Text, Image} from 'react-native'


export default function Details(props) {
    return (
        <View style={styles.container}>
            <Text>{ props.route.params.id}</Text>
            <Text>{ props.route.params.name}</Text>
            <Text>{ props.route.params.description}</Text>
            <Image
            source={ props.route.params.source}
            />
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