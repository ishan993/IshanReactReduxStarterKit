import { combineReducers } from 'redux';
import DisplayReducer from './display-reducer';

const rootReducer = combineReducers({
   displayProps: DisplayReducer
});

export default rootReducer;
