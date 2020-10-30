import React from 'react';
import { Menu, Segment, Sidebar, Form, TextArea } from 'semantic-ui-react';
import Markdown from '../molecules/Markdown';
import { useDispatch, useSelector } from 'react-redux';

const SidebarNotes = () => {

	const notes = useSelector(state => state.notes);
	const currentNote = useSelector(state => state.currentNote);
	const searchValue = useSelector(state => state.searchValue);
	const dispatch = useDispatch();

	const setCurrentNote = id => dispatch({ type: 'CURRENT_NOTE', currentNoteId: id });
	const setNoteText = note => dispatch({ type: 'NOTE_TEXT', noteText: note });
	const setResultsCount = resultsCount => dispatch({ type: 'RESULTS', resultsCount: resultsCount });

	const handleChange = event => {
		setNoteText(event.target.value);
		console.log(event.target.value);
	};

	const renderNotes = () => {
		let notesLocal;
		if (searchValue === '' || searchValue === undefined) {
			notesLocal = notes;
		} else {
			notesLocal = notes.filter(note =>
				note.value.includes(searchValue),
			);

			setResultsCount(notes.length);
		}

		return notesLocal.map(note => {
			const selected =
				note?.id === currentNote ? 'rgba(0, 168, 168, 0.25)' : 'white';
			console.log(selected);
			return (
				<Menu.Item
					as='a'
					key={note?.id}
					onClick={() => setCurrentNote(note.id)}
					style={{ backgroundColor: selected }}
				>
					<p>{note?.date}</p>
					{console.log(note?.date)}
					<p>{note?.value.slice(0, 10)}</p>
				</Menu.Item>
			);
		});
	};

	return (
		<Sidebar.Pushable as={Segment}>
			<Sidebar as={Menu} icon='labeled' vertical visible={true} width='thin'>
				{renderNotes()}
			</Sidebar>

			<Sidebar.Pusher>
				<Segment basic>
					<Form>
						<TextArea
							rows={10}
							cols={50}
							placeholder={
								notes.length ? 'Start writing your note...' : ''
							}
							onChange={handleChange}
							value={
								notes?.filter(note => note.id === currentNote)[0]
									?.value ?? ''
							}
						/>

						<Markdown
							input={
								notes?.filter(note => note.id === currentNote)[0]
									?.value ?? ''
							}
						/>
					</Form>
				</Segment>
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	);
};

export default SidebarNotes;
