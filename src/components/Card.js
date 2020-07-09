import React from 'react'
import { Text, StyleSheet, View,TouchableOpacity, Linking, Platform} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';


const colors = ['#6002ee','#D602EE','#ef0078','#ee6002','#009688']
const Card = (props) =>{
    const {navigation, data} = props;
    const {name, categoryName, location, classLocPref,phoneNumber,enqId} = data;
    const color = colors[Math.floor(Math.random() * 5)];

    const openDailer = () =>{
        if(Platform.OS === 'android'){
            Linking.openURL(`tel:${phoneNumber}`)
        }else{
            Linking.openURL(`telprompt:${phoneNumber}`)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Details",{enqId})}>
            <View style={{flexDirection:'row',flex:1}}>

                    <View style={{flex:0.1}}>          
                        <View style={{ ...styles.circle,backgroundColor:color}}>
                            <Text style={{...styles.circlefont}}>{String(name[0])}</Text>
                        </View>
                    </View>
                    
                    <View style={{flex:0.7,marginLeft:10,flexDirection:'column'}}>          
                        <Text style={{...styles.font, fontSize:24,color:'black',fontWeight:'900'}} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
                        <Text style={styles.font}>{categoryName}</Text>
                        <Text style={styles.font}>{location}</Text>
                        <Text style={styles.font}>{classLocPref}</Text>
                    </View>

                    <View style={{flex:0.2,flexDirection:'column'}}>
                        <TouchableOpacity onPress={()=> openDailer()}>
                            <Text style={{...styles.font, fontSize:12, color:'gray',paddingLeft:10}}>10 hours ago</Text>
                            <View style={{marginVertical:10,alignItems:'center',justifyContent:'center'}}>
                                <Icon name="stay-primary-portrait" color={color} size={30} />
                            </View>
                        </TouchableOpacity>
                    </View>

        
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container:{
        margin:2,
    },
    circle:{
        marginTop:10,
        height:40,
        width:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    circlefont:{
        fontSize:28,
        color:"#fff",
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    },
    button: {
        alignItems: "center",
        height:100,
        padding: 5,
        backgroundColor:'white',
      },
    font:{
        fontFamily:'tahoma',
        fontSize:16,
        fontWeight:'600',
        color:'gray',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    }
})
