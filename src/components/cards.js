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
      return "#D8D8D8"
    }else{
      switch(naipe){
        case 1:
          return "#0101DF" // ouro
        case 2:
          return "#B40404" // copas
        case 3:
          return "#A4A4A4" // espadas
        case 4:
          return "#04B404" // paus
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

  selectNaipeIcon = () => {
    switch(this.state.naipe){
      case 1:
        return '♦'
      case 2:
        return '♥'
      case 3:
        return '♠'
      case 4:
        return '♣'
      default:
        return 'erro'
    } 
  }

  figuras = () => {
    if(this.state.carta == 1) return "A"
    else if(this.state.carta == 11) return "J"
    else if(this.state.carta == 12) return "Q"
    else if(this.state.carta == 13) return "K"

    return this.state.carta
  }

  size = () => {
    if(this.props.rota == 'home') return 30
    else return 35
  }

  carta = () => (
    <Text style={{ color:"white", fontSize: this.size(), textAlign: "center" }}>{!this.state.isDisabled ? this.figuras()+this.selectNaipeIcon() : null }</Text>
  );

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
          marginBottom: this.props.margem[3],
          marginRight: this.props.margem[2],
          backgroundColor: this.cardColor(this.state.naipe),
          borderRadius: 10
          }}
          disabled={this.state.isDisabled}>
          {/* <Image
            style={styles.button}
            source={require('./myButton.png')}
          /> */}
        {this.state.carta && this.state.naipe ? this.carta() : <Text style={{ color:"white", fontSize: 14, textAlign: "center", marginTop: "50%" }}>Click to select</Text>}
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