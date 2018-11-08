import { combineReducers } from 'redux';
import ExampleReducer from './ExampleReducer';
import CardsReducer from './CardsReducer';

export default combineReducers({
  ExampleReducer: ExampleReducer,
  CardsReducer: CardsReducer,
});