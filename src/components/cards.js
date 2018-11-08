import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardSelect } from '../actions/CardsActions';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carta = null,
      naipe = null    
    };
  };

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

  _onPressButton = (rota, carta, naipe, posicao) => {
    switch(rota){
      case 'home':
        this.props.cardSelect([carta, naipe, posicao]);
        return Actions.home()
      case 'selector':
        return Actions.selector({posicao})
      default:
      return Actions.home()
    }
  }

  render() {
    return (
      <TouchableOpacity
        {...props}
        onPress={() => this._onPressButton(this.props.rota, this.state.carta, this.state.naipe, this.props.posicao)}
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
        {this.state.carta && this.state.naipe ? <Text>{this.props.carta}{this.props.naipe}</Text> : <Text>Click to select</Text>}
      </TouchableOpacity>
    )

  }
  
};

const mapStateToProps = (state) => {
  return { selectCards: state.CardsReducer };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ cardSelect }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);