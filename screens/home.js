import React, {useState} from 'react'
import {StyleSheet, View, ImageBackground, Text, FlatList,Modal, TouchableOpacity, Image, Button,} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import NewPlant from './NewPlant';
import WeekDays from './weekDays';



const bgImage = {uri: "https://lh3.googleusercontent.com/j8nMll7-GNw5Ql-5J7Sp_9GdJXIGIp5DUqz2kKr7_tU9QjdApleiMHetuk4giqTYoXN9N-HcJ0f7a4tldFa-knKFxzzlmnxqJWCiMOEZRUp9xCZTjKMQuCwHKpVMqbnGsuwlBqfBDOCGItvSzPeuygU_AcS00Gb4tQOsWu27IhnmkS9vHVr3l_dacDJV-ycOu5shXmSWUP_1naNQd-0teaYWIY1d1Gd4yR-I9_e33ETzZ3EPuhm39Tc50ZvwLYp8H__p4Rcry0TX-iYu_Xch6Yp9oJGhNCGhNaBYrIUerdXNcWSQrpUP9aaQfgFIK4jYBJQM_1T_Ob4ZLRWoh1nOJ8XxrF4_QWoAOjZoUkfAxLOQcQgHWY4yqFdAieICBumWweE37mYal9gsdmGDaUNdTab1KZyO294JfvvJGJvwJZIO8d7gPigKsRSX-Aynv3NJIt5ti_7DGOTAuySFWqFa2OJ7v-VP04SuwIyG49wtzqRsYxiXf7Q52lr3e_OmyCiPPCfSgp4-FQDW7PH44TEWHOLHZSuS_A85UYUiPVU-h5I9nXp2U0hsmMrSaR4paPwgnR5iAaI1DIGaRPR7b7ALx2E2YPZ0FXPiWFTMxLC195q26Tq16AMrjemKNixnz1M42K2m75LKZyKko6FY4nbH7OlZgHS9oRXH-ogg1RbaltPzFpAzmGl0FolDNfqIiTiSbT9U2q4DdEUeyNa3yEXjVqwY=w611-h915-no?authuser=0"};

export default function home( {navigation} ) {
    const [modalOpen, setModalOpen] = useState(false);
    const [plant, setPlant] = useState([
        { name: "Adam", description:"1lorem ipsum dolores es sum1lorem ipsum dolores es sum1lorem ipsum dolores es sum1lorem ipsum dolores es sum1lorem ipsum dolores es sum1lorem ipsum dolores es sum1lorem ipsum dolores es sum1lorem ipsum dolores es sum1lorem ipsum dolores es sum1lorem ipsum dolores es sum1lorem ipsum dolores es sum",  source: require('../images/plant.png'), key:'1'},
        { name: "Wlodek",description:"2lorem ipsum dolores es sum", source: require('../images/plant.png'), key:'2'},
        { name: "Krystek",description:"3lorem ipsum dolores es sum", source: require('../images/plantv2.jpg'), key:'3'},
       { name: "Zdzisiu",description:"4lorem ipsum dolores es sum",  source: require('../images/plant.png'), key:'4'},
    
    ]);
    const addPlant = (plant) => {
        plant.key = Math.random().toString();
        setPlant((currentPlants)=>{
            return [plant, ...currentPlants];
        });
        setModalOpen(false);
    }
   
    return (
        <View style={styles.containerBg}>
        <ImageBackground source={bgImage} resizeMode='cover' style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.headline}>My Plants </Text>
            </View>
            <Modal visible={modalOpen} annimationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                    name='close'
                    size={48}
                    onPress={()=> setModalOpen(false)}
                    style={styles.modalToggle}
                />
                    <NewPlant addPlant={addPlant} />
                </View>
            </Modal>
            <FlatList 
            horizontal
            data={plant}
            renderItem={ ({item}) => (
                <View style={styles.container}>
                    
                    <TouchableOpacity onPress={()=> navigation.navigate('Details',item )}  >
                        <Image style={styles.images}
                            source={require('../images/plant.png')}
                            />
                    </TouchableOpacity>
                    <Text style={styles.text}>{item.name}</Text>
                </View>         
                )}
            />
            {/* <WeekDays/> */}
            <MaterialIcons
                name='add'
                size={48}
                onPress={()=> setModalOpen(true)}
                style={styles.modalToggle}
                
            />
        </ImageBackground>
        </View>
    )

}
const styles = StyleSheet.create({
    image:{
        flex: 1,
        justifyContent: "center"
    },
    text:{
        fontSize: 24,
        color: 'black',
    },
    modalToggle:{
        alignSelf: 'flex-end',
        padding: 10,
    },
    modalClose:{
        alignSelf: 'center',
        padding: '10',
    },
    images:{
        height: 300,
        width: 200,
        margin: 10,
    },
    modalContent:{
        flex: 1,
    },
        
    container: {
        alignItems: 'center',
        fontSize: 60,
        padding: 10,
         
    },
    containerBg:{
        flex:1
    },

    headline:{
        fontSize: 55,
        alignSelf: 'flex-start',

    },  

});