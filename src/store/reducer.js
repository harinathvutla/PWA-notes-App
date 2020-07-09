const initialState = {
	notes: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_NOTE':
			console.log('create note');
			console.log({
				...state,
				notes: [...state.notes, { id: Date.now(), value: '' }],
			});
			return {
				...state,
				notes: [...state.notes, { id: Date.now(), value: '' }],
			};
		case 'DELETE_NOTE':
			console.log('delete note');
			return {};
		default:
			return state;
	}
};

export default reducer;
