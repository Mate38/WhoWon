import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableOpacity } from 'react-native';

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

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

  render() {
    const {
      carta,
      naipe,
      altura,
      largura,
      margem = [],
      rota,
      ...props
    } = this.props;

    return (
      <TouchableOpacity
        {...props}
        onPress={() => this._onPressButton(this.props.rota)}
        style={{
          height: this.props.altura,
          width: this.props.largura,
          margin: this.props.margem[0],
          marginLeft: this.props.margem[0],
          marginTop: this.props.margem[1],
          marginRight: this.props.margem[2],
          marginBottom: this.props.margem[3],
          backgroundColor: this.cardColor(this.props.naipe)
          }}>
          {/* <Image
            style={styles.button}
            source={require('./myButton.png')}
          /> */}
        <Text>{this.props.carta.toString()}{this.props.naipe.toString()}</Text>
      </TouchableOpacity>
    )

  }
  
};