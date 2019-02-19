import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Item = (props) => {
  const {item, itemText, countButton, countNumber, countArea, itemDelete, itemDeleteText} = styles
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View key={props.keyval} 
              style={item}>
          <Text style={itemText}>
            {props.value} 
          </Text>
          { '' ?          
            <View style={countArea}>
              <View style={countButton}>
              <Text style={countNumber}>7</Text> 
            </View>
            </View> :
            <TouchableOpacity onPress={props.delete} 
                              style={itemDelete}>
              <Text style={itemDeleteText}>Delete</Text>
            </TouchableOpacity> }
        </View>
      </TouchableOpacity>
    );
  }


const styles = StyleSheet.create({
  item: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3'
  },
  countButton: {
    zIndex: 999,
    backgroundColor: '#313464',
    width: 50,
    height: 50,
    borderRadius: 50
  },
  countNumber: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 18,
    marginTop: 8,
    color: '#fff'
  },
  countArea: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    top: 0,
    bottom: 0,
    right: 0
  },
  itemText: {
    paddingLeft: 10,
    fontSize: 20,
    color: '#091430',
    fontWeight: '400'
  },
  itemDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d4145a',
    padding: 20,
    top: 0,
    bottom: 0,
    right: 0
  },
  itemDeleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})

export {Item} 