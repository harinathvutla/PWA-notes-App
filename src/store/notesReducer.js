const initialState = {
	notes: [],
	currentNote: '',
};

const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_NOTE':
			let id = Date.now();
			console.log('create note');
			console.log({
				...state,
				notes: [
					...state.notes,
					{ id: id, value: '', date: new Date().toDateString() },
				],
				currentNote: id,
			});

			return {
				...state,
				notes: [
					...state.notes,
					{ id: id, value: '', date: new Date().toDateString() },
				],
				currentNote: id,
			};
		case 'NOTE_TEXT':
			console.log({
				...state,
				notes: state.notes.map(note =>
					note.id === state.currentNote
						? { ...note, value: action.noteText }
						: note,
				),
			});
			return {
				...state,
				notes: state.notes.map(note =>
					note.id === state.currentNote
						? { ...note, value: action.noteText }
						: note,
				),
			};
		case 'CURRENT_NOTE':
			console.log(action.currentNoteId);
			return { ...state, currentNote: action.currentNoteId };
		case 'DELETE_NOTE':
			console.log('delete note');
			return {
				...state,
				notes: state.notes.filter(note => note.id !== state.currentNote),
			};
		default:
			return state;
	}
};

export default notesReducer;
