import React from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import Card from '../../components/cards';

/**
 * card(carta, naipe, altura, largura, [margem esquerda, margem superior, margem direita, margem inferior])
 */
_cardS = (carta, naipe, posicao) => (
  <Card 
    carta = {carta} 
    naipe = {naipe}
    posicao = {posicao}
    altura = {47} 
    largura = {34}
    margem = {[10, 3, 10, 3]}
    rota = 'home' />
);

const Selector = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ouro}>
        {this._cardS(1,1,props.posicao)}
        {this._cardS(2,1,props.posicao)}
        {this._cardS(3,1,props.posicao)}
        {this._cardS(4,1,props.posicao)}
        {this._cardS(5,1,props.posicao)}
        {this._cardS(6,1,props.posicao)}
        {this._cardS(7,1,props.posicao)}
        {this._cardS(8,1,props.posicao)}
        {this._cardS(9,1,props.posicao)}
        {this._cardS(10,1,props.posicao)}
        {this._cardS(11,1,props.posicao)}
        {this._cardS(12,1,props.posicao)}
        {this._cardS(13,1,props.posicao)}
      </View>
      <View style={styles.copas}>
        {this._cardS(1,2,props.posicao)}
        {this._cardS(2,2,props.posicao)}
        {this._cardS(3,2,props.posicao)}
        {this._cardS(4,2,props.posicao)}
        {this._cardS(5,2,props.posicao)}
        {this._cardS(6,2,props.posicao)}
        {this._cardS(7,2,props.posicao)}
        {this._cardS(8,2,props.posicao)}
        {this._cardS(9,2,props.posicao)}
        {this._cardS(10,2,props.posicao)}
        {this._cardS(11,2,props.posicao)}
        {this._cardS(12,2,props.posicao)}
        {this._cardS(13,2,props.posicao)}
      </View>
      <View style={styles.espadas}>
        {this._cardS(1,3,props.posicao)}
        {this._cardS(2,3,props.posicao)}
        {this._cardS(3,3,props.posicao)}
        {this._cardS(4,3,props.posicao)}
        {this._cardS(5,3,props.posicao)}
        {this._cardS(6,3,props.posicao)}
        {this._cardS(7,3,props.posicao)}
        {this._cardS(8,3,props.posicao)}
        {this._cardS(9,3,props.posicao)}
        {this._cardS(10,3,props.posicao)}
        {this._cardS(11,3,props.posicao)}
        {this._cardS(12,3,props.posicao)}
        {this._cardS(13,3,props.posicao)}
      </View>
      <View style={styles.paus}>
        {this._cardS(1,4,props.posicao)}
        {this._cardS(2,4,props.posicao)}
        {this._cardS(3,4,props.posicao)}
        {this._cardS(4,4,props.posicao)}
        {this._cardS(5,4,props.posicao)}
        {this._cardS(6,4,props.posicao)}
        {this._cardS(7,4,props.posicao)}
        {this._cardS(8,4,props.posicao)}
        {this._cardS(9,4,props.posicao)}
        {this._cardS(10,4,props.posicao)}
        {this._cardS(11,4,props.posicao)}
        {this._cardS(12,4,props.posicao)}
        {this._cardS(13,4,props.posicao)}
      </View>
    </View>
  );
};

export default Selector;