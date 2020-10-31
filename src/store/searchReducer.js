const initialState = {};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SEARCH':
			console.log('search reducer', action.value);
			return {
				...state,
				searchValue: action.value,
			};
		case 'RESULTS':
			return {
				...state,
				resultsCount: action.resultsCount,
			};
		case 'SET_LOADING':
			return {
				...state,
				isLoading: action.val,
			};
		default:
			return state;
	}
};

export default searchReducer;
