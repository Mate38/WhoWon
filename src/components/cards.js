import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardSelect } from '../actions/CardsActions';
import { isSelected } from '../functions/isSelected';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carta: null,
      naipe: null,
      isDisabled: false    
    };
  };

  componentDidMount = () => {
    if(this.props.rota == 'selector'){
      for(card in this.props.selectCards){
        if(this.props.selectCards[card][2] == this.props.posicao){
          this.setState({
            carta: this.props.selectCards[card][0],
            naipe: this.props.selectCards[card][1],
          })
        }
      }
    }else if(this.props.rota == 'home'){
      this.setState({
        carta: this.props.carta,
        naipe: this.props.naipe,
        isDisabled: isSelected(this.props.carta, this.props.naipe, this.props.selectCards)
      })
    }
  }

  /**
   * 1 = Ouro, 2 = Copas, 3 = Espadas, 4 = Paus 
   */
  cardColor = (naipe) => {
    if(this.state.isDisabled){
      return "gray"
    }else{
      switch(naipe){
        case 1:
          return "blue"
        case 2:
          return "red"
        case 3:
          return "orange"//"black"
        case 4:
          return "green"
        default:
          return "gray"
      }
    }
  };

  _onPressButton = (rota, posicao) => {
    switch(rota){
      case 'home':
        this.props.cardSelect([this.state.carta, this.state.naipe, posicao]);
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
        onPress={() => this._onPressButton(this.props.rota, this.props.posicao)}
        style={{
          height: this.props.altura,
          width: this.props.largura,
          margin: this.props.margem[0],
          marginLeft: this.props.margem[0],
          marginTop: this.props.margem[1],
          marginRight: this.props.margem[2],
          marginBottom: this.props.margem[3],
          backgroundColor: this.cardColor(this.state.naipe)
          }}
          disabled={this.state.isDisabled}>
          {/* <Image
            style={styles.button}
            source={require('./myButton.png')}
          /> */}
        {this.state.carta && this.state.naipe ? <Text>{this.state.carta}{this.state.naipe}</Text> : <Text>Click to select</Text>}
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