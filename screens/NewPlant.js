import React from 'react'
import {StyleSheet, View, TextInput, Image, Button} from 'react-native'
import {Formik} from 'formik'


export default function NewPlant({addPlant}) {
    

    return (
    <View style={styles.container} >
        <Formik
            initialValues={{name:'', description: ''} }
            onSubmit={(values, actions)=>{
                actions.resetForm();
                addPlant(values);
            }}
        >
            {(props)=>(
                <View >
                    <TextInput 
                    style={styles.input}
                    placeholder='plant name'
                    onChangeText={props.handleChange('name')}
                    value={props.values.name}
                    />
                   
                    <TextInput 
                    multiline
                    style={styles.input}
                    placeholder='plant description'
                    onChangeText={props.handleChange('description')}
                    value={props.values.description}
                    />
                    
                    <Button title='submit' color='red' onPress={props.handleSubmit}/>
                </View>
                
            )}

        </Formik>

    </View>
    )
    
}
const styles = StyleSheet.create({
    input: {
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      width: 300,
    },
    images:{
        width: 300,
        height: 300,
    },
    container: {
        alignItems: 'center',
        fontSize: 60,
        
        height: 600,
        padding: 10,
         
    },
  });
