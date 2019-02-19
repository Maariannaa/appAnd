import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const AddNewItem = ({onPress}) => {
  const { addButton, addButtonText} = styles
  return (
    <TouchableOpacity onPress={onPress} style={addButton}>
      <Text style={addButtonText}>+</Text> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  addButton: {
    justifyContent: 'center',
    zIndex: 999,
    backgroundColor: '#d4145a',
    width: 60,
    height: 60,
    borderRadius: 50,
    margin: 20, 
    marginLeft: 175,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 5
    },
    shadowRadius: 4,
    shadowOpacity: 0.8,
    elevation: 8
  },
  addButtonText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 19,
    marginTop: -6,
    color: '#f5a8f0'
  }
})

export { AddNewItem }