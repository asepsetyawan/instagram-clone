import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image
} from 'react-native';
var width = Dimensions.get('window').width;
export default class topBar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  _goBack(){
    this.props.navigator.pop()
  }
  _onReder(){
    if(this.props.onPhoto){
      return(
        <View style={styles.nav}>
          
          <Text style={{flex:1, textAlign:'center'}}>{this.props.title}</Text>
          <Text style={{flex:1,textAlign:'center'}}>..</Text>
        </View>
        )
    }else{
      return(
      <View style={styles.nav}>
      
      </View>
     
        )
    }
  }
  render() {
    return (
      <View style={styles.topBar}>
      {this._onReder()}
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  topBar:{
    flexDirection:'row',
    marginTop:20,
    height:50,
    width:width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFF',
    borderWidth:1,
    borderTopColor:'#FFF',
    borderBottomColor:'#E2E2E2',
    borderLeftColor:'#FFF',
    borderRightColor:'#FFF'
  },
  nav:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    flexDirection:'row',
    
  }
});


