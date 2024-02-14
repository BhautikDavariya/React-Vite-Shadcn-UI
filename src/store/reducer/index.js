
import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import portfolioMainReducer from './portfolioMainReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    portfolio: portfolioMainReducer
});

export default rootReducer;
