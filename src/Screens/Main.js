import React from 'react';
import { StyleSheet, FlatList, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchList } from '../redux/actions/ListAction';
import propTypes from 'prop-types';
import Card from '../components/Card'

class Main extends React.Component{

    componentDidMount(){
        this.props.fetchList();
    }

    _renderItem = ({item})=> {
      const {navigation} = this.props;
      return(
        <Card navigation={navigation} data={item}/>
    )
  }

  render(){
    const {error,loading,items} = this.props.newState;   
    if(error){
        return(
            <View style={{...styles.container}}>
              <Text>Error! {error.message} </Text>;
            </View>
          )
    }
    if(loading){  
    return(
        <View style={{...styles.container}}>
          <ActivityIndicator size="large" animating/>
        </View>
      )

    }
    return(
      <View style={{...styles.container}}>
        <FlatList
          data = {this.props.newState.items}
          renderItem = {this._renderItem}
          keyExtractor = {(item,index) => index.toString()}
        />
      </View>
    )

  }
};

Main.propTypes = {
  fetchList : propTypes.func.isRequired,
  newState : propTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    newState : state
  }
}

export default connect(mapStateToProps,{fetchList})(Main);

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});


