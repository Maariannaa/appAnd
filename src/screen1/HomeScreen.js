import React, {PureComponent} from 'react'
import { View, ScrollView } from 'react-native'
import { Header, AddNewItem, Item } from '../components/uikit'
import { NEW_ITEM_SCREEN, COMMENT_SCREEN } from '../routes'
import { BLUE } from '../../constants'

export default class Main extends PureComponent {
  state = {
    header: 'Sayer',
    itemArray: [
    ],
    itemText: '',
  }

  onGoBack = (someDataFromChildren) => {
    if (someDataFromChildren) {
      this.state.itemArray.push({
       itemText: someDataFromChildren
      })
    this.setState({ itemText: this.state.itemText})
    }
   this.setState({ itemText: someDataFromChildren}) 
  }

   deleteItem(key) {
    this.state.itemArray.splice(key, 1);
    this.setState({ itemArray: this.state.itemArray})
   }

  render() {
    const { header, itemArray } = this.state
    const { navigation } = this.props
    return (
      <View  style={{justifyContent : 'center', backgroundColor: '#fff'}}>
        <Header 
          header={header} 
          headerColor={BLUE}>
        </Header>
        <ScrollView >
          {itemArray.map((item, key) =>  
            <Item key={key}
                  keyval={key}
                  value={item.itemText}
                  delete = {() => this.deleteItem(key)}
                  onPress={() => 
                    navigation.navigate(COMMENT_SCREEN, ({ itemText: this.state.itemText, onGoBack: this.onGoBack}))}/>
             )}    
            <AddNewItem onPress={() => 
                          navigation.navigate(NEW_ITEM_SCREEN, ({  onGoBack: this.onGoBack}))}/>
        </ScrollView>       
      </View>
    )
  }
}