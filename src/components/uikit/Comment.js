import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const Comment = (props) => {
  const {item, itemText} = styles
    return (
      <View 
        key={props.keyval} 
        style={item}>
        <Text style={itemText}>
           {props.value.comment}   
        </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  itemText: {
    paddingLeft: 20,
    fontSize: 20,
    color: 'gray'
  }
})

export {Comment} 