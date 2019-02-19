import React, { PureComponent } from 'react'
import {TextInput, Image, View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Comment } from '../components/uikit'
import { BLUE} from '../../constants'

export default class CommentScreen extends PureComponent {
  constructor(props){
    super(props)
      this.state = {
        commentArray: [],
        commentText: '',
        header: ''
      }
    }

  addComment() {
    if (this.state.commentText) {
      this.state.commentArray.push({
        'comment': this.state.commentText
      })
      this.setState({ commentArray: this.state.commentArray})
      this.setState({ commentText: ''})
    }
  }
          
  componentWillUnmount() {
    const { onGoBack } = this.props.navigation.state.params
    onGoBack && onGoBack('')
  }

  render() {
    const { header} = this.state
    const { itemText } = this.props.navigation.state.params
    const {img, container, containerHeader, styleHeader, scrollView, footer, textInput} = styles
    const { navigation } = this.props
    let comments = this.state.commentArray.map((value, key) => {
      return <Comment key={key} keyval={key} value={value}
      />
    })
  return (
    <View style = {container}>   
      <View style={containerHeader}
            headerColor={BLUE}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={img}
                 source={require('../arrowBack.png')} />
        </TouchableOpacity>
        <Text style={styleHeader}> {itemText}  </Text>
      </View>
      <ScrollView style = {scrollView}>       
        {comments} 
      </ScrollView>      
      <View style = {footer}>
        <TextInput style = {textInput}
                    onChangeText={(commentText) => this.setState({commentText})}
                    value={this.state.commentText}
                    placeholder=' New comment goes here..'
                    placeholderTextColor='gray'
                    underlineColorAndroid='transparent'/> 
        <TouchableOpacity onPress={this.addComment.bind(this)} >
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
    flex: 1
  },
  containerHeader: {
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
  scrollView: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    padding: 10
  },
  textInput: {
    paddingRight: 70,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: '400'
  },
  img:  {
    width: 50, 
    height: 50,
    marginLeft: 15
  }
})