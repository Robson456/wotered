import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Text, Pressable, TouchableHighlight} from 'react-native'
import { CheckBox, RadioButton, RadioGroup } from "react-native-radio-check"


export default function weekDays() {
    
    const [toggle, setToogle] = useState(false);
    const toggleHandle = (toggle) =>{
        setToogle(true);
        console.log('click');
        if(toggle = true){
            console.log('clickv2');
            
        }
    };
  return(
      <View style={styles.container}>
          <ScrollView
            horizontal
          >
            <TouchableHighlight 
                onPress={toggleHandle} 
                activeOpacity={0.5}
                underlayColor="#67c904"
            >   
                <Text style={styles.days}>Sun</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={toggleHandle} 
                activeOpacity={0.5}
                underlayColor="#67c904"
            >
                <Text style={styles.days}>Mon</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={toggleHandle}
                activeOpacity={0.5}
                underlayColor="#67c904"
            >
                <Text style={styles.days}>Tu</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={toggleHandle}
                activeOpacity={0.5}
                underlayColor="#67c904"
            
            >
                <Text style={styles.days}>Wed</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={toggleHandle}
                activeOpacity={0.5}
                underlayColor="#67c904"
                
            >
                <Text style={styles.days}>Th</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={toggleHandle} 
                activeOpacity={0.5}
                underlayColor="#67c904"
            >
                <Text style={styles.days}>Fri</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={toggleHandle}
                activeOpacity={0.5}
                underlayColor="#67c904" 
            >
                <Text style={styles.days}>Sat</Text>
            </TouchableHighlight>

          </ScrollView>
        
      </View>
  );
  
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    days:{
        padding: 5,
        margin: 5,
        fontSize: 18,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 1,
    },
})
