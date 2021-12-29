import {StyleSheet, View, ImageBackground, Text, Button} from 'react-native';
import Card from '../components/card';

const bgImage = {uri: 'https://lh3.googleusercontent.com/Bnc1qB0B-CtSgVpmzQSRrDBp3hXVNZvzYYlwmEovlLAXeCNDWVwTV03mmVhqpVTPPBS6TdKBy5IMspu6mmgIYcN39emnls4lHgm-R7v5fX3S3v585xdznP70ZszWFuMhS90FwLgGx-7C_oAaWod6gWF7N3uphJfbCsOZ6kPPJvdITTv2PmRLoopgErkOSN8ia8vWP92-Ulhb0vmMDlf08Dmi6bsquU1US56Ashp1xe4tXdo4dBz2WQcs0PwylvXUXN_5Ng-FP9HkSMJli3Y4JR1WsN2nu1_hM-qwM6K95r_3_yTeJaTaarkd-ljmXtVRmSA4xrLPzmngZ9j7f4rKnS8J_UvnGoyXa1JMFE-pROI2vL-xz8eI7dg798Uo795zbyhoqi-RbNV6PJmLxMzVdX_xBIns0v7-KqsaH2GfcCWq1SajhaCo4_59aPcOahZW8hAnjctcXsT4SsovegEo_fdNTd6U9PNeP1D_GjKOF-oc71AmLZb-h6ZQvuUH2-q69X8CBxn1m8JmvxjYmG3MnFin7vTOdr-6VB80t06WbgxRFMECQ7dvrb3ZqmM_qNdbkp4KH0kuISg617OYXtNRwjmNO5ll9f0xVcnFTP2OlWM9Ta7zlrB61hpVVd6rbIPr3RCNiFwewu0hKFnUFky0FhmxTbVFEggbIAaRW0BozSCi1tbRhtH9p7XDHch0U--XA0iPbVxr5A3cZeR0Vypm3dZz=w611-h915-no?authuser=0'};


export default function home( {navigation} ) {
    return (
        <ImageBackground source={bgImage} resizeMode='cover' style={styles.image}>
            <View style={styles.container}>
                    <Text style={styles.headline}>My Plants </Text>
                    <Button
                        title="Go to Details"
                        onPress={() => navigation.navigate('Details')}
                    />
            <Text>eloooo</Text>
            <Card/>
            </View>
            </ImageBackground>
    )
}
const styles = StyleSheet.create({
    image:{
        flex: 1,
    },

    container: {
        alignItems: 'center',
        fontSize: 60,
         
    },

    headline:{
        fontSize: 55,
        alignSelf: 'flex-start',

    },  

});