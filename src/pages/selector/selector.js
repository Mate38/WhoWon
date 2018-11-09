import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardSelect } from '../../actions/CardsActions';
import { styles } from './styles';
import { View } from 'react-native';
import Card from '../../components/cards';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  /**
   * card(carta, naipe, altura, largura, [margem esquerda, margem superior, margem direita, margem inferior])
   */
  _cardS = (carta, naipe, posicao) => (
    <Card 
      carta = {carta} 
      naipe = {naipe}
      posicao = {posicao}
      altura = {47} 
      largura = {80}
      margem = {[10, 3, 10, 3]}
      rota = 'home' />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ouro}>
          {this._cardS(1,1,this.props.posicao)}
          {this._cardS(2,1,this.props.posicao)}
          {this._cardS(3,1,this.props.posicao)}
          {this._cardS(4,1,this.props.posicao)}
          {this._cardS(5,1,this.props.posicao)}
          {this._cardS(6,1,this.props.posicao)}
          {this._cardS(7,1,this.props.posicao)}
          {this._cardS(8,1,this.props.posicao)}
          {this._cardS(9,1,this.props.posicao)}
          {this._cardS(10,1,this.props.posicao)}
          {this._cardS(11,1,this.props.posicao)}
          {this._cardS(12,1,this.props.posicao)}
          {this._cardS(13,1,this.props.posicao)}
        </View>
        <View style={styles.copas}>
          {this._cardS(1,2,this.props.posicao)}
          {this._cardS(2,2,this.props.posicao)}
          {this._cardS(3,2,this.props.posicao)}
          {this._cardS(4,2,this.props.posicao)}
          {this._cardS(5,2,this.props.posicao)}
          {this._cardS(6,2,this.props.posicao)}
          {this._cardS(7,2,this.props.posicao)}
          {this._cardS(8,2,this.props.posicao)}
          {this._cardS(9,2,this.props.posicao)}
          {this._cardS(10,2,this.props.posicao)}
          {this._cardS(11,2,this.props.posicao)}
          {this._cardS(12,2,this.props.posicao)}
          {this._cardS(13,2,this.props.posicao)}
        </View>
        <View style={styles.espadas}>
          {this._cardS(1,3,this.props.posicao)}
          {this._cardS(2,3,this.props.posicao)}
          {this._cardS(3,3,this.props.posicao)}
          {this._cardS(4,3,this.props.posicao)}
          {this._cardS(5,3,this.props.posicao)}
          {this._cardS(6,3,this.props.posicao)}
          {this._cardS(7,3,this.props.posicao)}
          {this._cardS(8,3,this.props.posicao)}
          {this._cardS(9,3,this.props.posicao)}
          {this._cardS(10,3,this.props.posicao)}
          {this._cardS(11,3,this.props.posicao)}
          {this._cardS(12,3,this.props.posicao)}
          {this._cardS(13,3,this.props.posicao)}
        </View>
        <View style={styles.paus}>
          {this._cardS(1,4,this.props.posicao)}
          {this._cardS(2,4,this.props.posicao)}
          {this._cardS(3,4,this.props.posicao)}
          {this._cardS(4,4,this.props.posicao)}
          {this._cardS(5,4,this.props.posicao)}
          {this._cardS(6,4,this.props.posicao)}
          {this._cardS(7,4,this.props.posicao)}
          {this._cardS(8,4,this.props.posicao)}
          {this._cardS(9,4,this.props.posicao)}
          {this._cardS(10,4,this.props.posicao)}
          {this._cardS(11,4,this.props.posicao)}
          {this._cardS(12,4,this.props.posicao)}
          {this._cardS(13,4,this.props.posicao)}
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return { selectCards: state.CardsReducer };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ cardSelect }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);