import React, { PureComponent } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { BLUE} from '../../constants'
import { HOME_SCREEN } from '../routes'

export default class NewItemScreen extends PureComponent {

  state = {
    valueItemText: ''
  }

  componentWillUnmount() {
    const { onGoBack } = this.props.navigation.state.params
    onGoBack && onGoBack(this.state.valueItemText)
  }

  render() {    
    const { navigation } = this.props
    const { container, styleHeader, newItem, textInput, img } = styles 
    return (
      <View>
        <View style={container}
              headerColor={BLUE}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={img}
                   source={require('../arrowBack.png')} />
          </TouchableOpacity>
          <Text style={styleHeader}> Create new item  </Text>
        </View>
        <View style={newItem}>
          <TextInput style = {textInput}
                     onChangeText={(valueItemText) => this.setState({valueItemText})}
                     value={this.state.valueItemText}
                     placeholder=' New item title..'
                     placeholderTextColor={BLUE}
                     underlineColorAndroid='transparent'/>   
          <TouchableOpacity onPress={() => 
                            navigation.navigate(HOME_SCREEN, {onGoBack: this.onGoBack})}>
            <Image style={img}
                   source={require('../arrowAdd.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 145,
    backgroundColor: '#0e1d3c',
    paddingTop: 45,
    flexDirection: 'row'
  },
  styleHeader: {
    fontSize: 35,
    paddingLeft: 20,
    fontWeight: 'normal',
    color: '#ffffff'
  },      
  img:  {
    width: 50, 
    height: 50
  },
  newItem: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  textInput: {
    paddingRight: 170,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingLeft: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  }
})