import React, { Component } from 'react';
import { Text, StyleSheet, View,TouchableOpacity} from 'react-native';
import store from '../redux/store/store';

class Details extends Component {
    render() {
        const list = store.getState().items;
        const data = list.find(obj => obj.enqId == this.props.route.params.enqId);
        const {name,categoryName,location,classLocPref,phoneNumber} = data;
        
        return (
            <TouchableOpacity style={styles.button}>       
                <View style={{marginLeft:10,flexDirection:'column'}}>          
                        <Text style={styles.font}>{name}</Text>
                        <Text style={styles.font}>{categoryName}</Text>
                        <Text style={styles.font}>{location}</Text>
                        <Text style={styles.font}>{classLocPref}</Text>
                        <Text style={styles.font}>{phoneNumber}</Text>
                    </View>
            </TouchableOpacity>
        )
    }
}
  
export default Details;

const styles = StyleSheet.create({
    button:{
        padding:10,
        backgroundColor:"#eee",
    },
    font:{
        fontFamily:'tahoma',
        fontSize:24,
        fontWeight:'600',
        color:'gray',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    }
})
