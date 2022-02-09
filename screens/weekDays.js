// import React, {useState} from 'react';
// import {StyleSheet, View, ScrollView, Alert, Pressable, TouchableHighlight, Image} from 'react-native'
// import BouncyCheckbox from "react-native-bouncy-checkbox";
// import WeekdayPicker from "react-native-weekday-picker";


// export default function weekDays() {
//     let days = { 1:1, 2:1 , 3:1 , 4:1 , 5:1, 6:0, 0:0 }
    
//     const [checkboxState, setCheckboxState] = useState(false);
//     const toggleHandle = (days) => { this.setState(days)}
    
//   return(
//       <View style={styles.container}>
//           <ScrollView
//             horizontal
//           >
//         <BouncyCheckbox
//             style={{ marginTop: 16, size: 1}}
//             // text="Mon"
//           onPress={checkboxState ? toggleHandle(): console.log('2')}
//             textStyle={{
//                 textDecorationLine: "none",
//               }}
//               iconStyle={{
//                 borderRadius: 5, // to make it a little round increase the value accordingly
//               }}
        
              
//         />
//         <BouncyCheckbox
//             style={{ marginTop: 16 }}
//             // text="Mon"
//             onPress={toggleHandle}
//             textStyle={{
//                 textDecorationLine: "none",
//               }}
//               iconStyle={{
//                 borderRadius: 5, // to make it a little round increase the value accordingly
//               }}
//         />
//         <WeekdayPicker
//           days={days}
//           onChange={toggleHandle()}
         
//         />

//             {/* <TouchableHighlight 
//                 onPress={toggleHandle} 
//                 activeOpacity={0.5}
//                 underlayColor="#67c904"
//             >   
//                 <Text style={styles.days}>Sun</Text>
//             </TouchableHighlight>
//             <TouchableHighlight 
//                 onPress={toggleHandle} 
//                 activeOpacity={0.5}
//                 underlayColor="#67c904"
//             >
//                 <Text style={styles.days}>Mon</Text>
//             </TouchableHighlight>
//             <TouchableHighlight 
//                 onPress={toggleHandle}
//                 activeOpacity={0.5}
//                 underlayColor="#67c904"
//             >
//                 <Text style={styles.days}>Tu</Text>
//             </TouchableHighlight>
//             <TouchableHighlight 
//                 onPress={toggleHandle}
//                 activeOpacity={0.5}
//                 underlayColor="#67c904"
            
//             >
//                 <Text style={styles.days}>Wed</Text>
//             </TouchableHighlight>
//             <TouchableHighlight 
//                 onPress={toggleHandle}
//                 activeOpacity={0.5}
//                 underlayColor="#67c904"
                
//             >
//                 <Text style={styles.days}>Th</Text>
//             </TouchableHighlight>
//             <TouchableHighlight 
//                 onPress={toggleHandle} 
//                 activeOpacity={0.5}
//                 underlayColor="#67c904"
//             >
//                 <Text style={styles.days}>Fri</Text>
//             </TouchableHighlight>
//             <TouchableHighlight 
//                 onPress={toggleHandle}
//                 activeOpacity={0.5}
//                 underlayColor="#67c904" 
//             >
//                 <Text style={styles.days}>Sat</Text>
//             </TouchableHighlight> */}
           

//           </ScrollView>
        
//       </View>
//   );
  
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         alignItems: 'center',
//     },
//     days:{
//         padding: 5,
//         margin: 5,
//         fontSize: 18,
//         borderColor: 'grey',
//         borderStyle: 'solid',
//         borderWidth: 1,
//     },
// })
