import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableOpacity } from 'react-native';

/**
 * 1 = Ouro, 2 = Copas, 3 = Espadas, 4 = Paus 
 */
cardColor = (naipe) => {
  switch(naipe){
    case 1:
      return "blue"
    case 2:
      return "red"
    case 3:
      return "black"
    case 4:
      return "green"
    default:
      return "gray"
  }
};

_onPressButton = (rota) => {
  switch(rota){
    case 'home':
      return Actions.home()
    case 'selector':
      return Actions.selector()
    default:
     return Actions.home()
  }
}

export const card = (carta, naipe, altura, largura, margem = [], rota) => {
  return (
    <TouchableOpacity
      onPress={() => this._onPressButton(rota)}
      style={{
        height: altura,
        width: largura,
        margin: margem[0],
        marginLeft: margem[0],
        marginTop: margem[1],
        marginRight: margem[2],
        marginBottom: margem[3],
        backgroundColor: cardColor(naipe)
        }}>
        {/* <Image
          style={styles.button}
          source={require('./myButton.png')}
        /> */}
      <Text>{carta.toString()}{naipe.toString()}</Text>
    </TouchableOpacity>
  )
};