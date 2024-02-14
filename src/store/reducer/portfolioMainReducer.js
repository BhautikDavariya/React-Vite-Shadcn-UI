import { portfoliosActionType } from '../../constants';

const portfolioMainReducer = (state = [], action) => {
    switch (action.type) {
        case portfoliosActionType.FETCH_PORTFOLIOS:
            return action.payload;
        case portfoliosActionType.FETCH_PORTFOLIO:
            return action.payload;
        case portfoliosActionType.ADD_PORTFOLIO:
            return action.payload;
        case portfoliosActionType.UPDATE_PORTFOLIO:
            return action.payload;
        case portfoliosActionType.DELETE_PORTFOLIO:
            return action.payload;
        default:
            return state;
    }
};
export default portfolioMainReducer