import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Header = ({header}) => {
  const {container, subText, styleHeader} = styles
    return (
      <View style={container}>
        <Text style={styleHeader}>{header}</Text>
        <Text style={subText}>
          World's most used time waster</Text> 
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 145,
    backgroundColor: '#0e1d3c',
    paddingTop: -20
  },
  subText: {
    fontSize: 18, 
    textAlign: 'left', 
    marginLeft: 25,
    fontWeight: 'normal',
    color: '#ffffff'
  },
  styleHeader: {
    fontSize: 40,
    textAlign: 'left',
    marginLeft: 25,
    fontWeight: 'bold',
    color: '#ffffff',    
  }
});

export { Header }