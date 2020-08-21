import React from 'react';
import { Menu, Segment, Sidebar, Form, TextArea } from 'semantic-ui-react';
import Markdown from '../molecules/Markdown';
import { connect } from 'react-redux';

const SidebarNotes = props => {
	const handleChange = event => {
		props.setNoteText(event.target.value);
		console.log(event.target.value);
	};

	const renderNotes = () => {
		let notes;
		if (props?.searchValue === '' || props?.searchValue === undefined) {
			notes = props?.notes;
		} else {
			notes = props?.notes.filter(note =>
				note.value.includes(props?.searchValue),
			);

			props.setResultsCount(notes.length);
		}

		return notes.map(note => {
			const selected =
				note?.id === props?.currentNote ? 'rgba(0, 168, 168, 0.25)' : 'white';
			console.log(selected);
			return (
				<Menu.Item
					as='a'
					key={note?.id}
					onClick={() => props?.setCurrentNote(note.id)}
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
								props?.notes.length ? 'Start writing your note...' : ''
							}
							onChange={handleChange}
							value={
								props?.notes?.filter(note => note.id === props.currentNote)[0]
									?.value ?? ''
							}
						/>

						<Markdown
							input={
								props?.notes?.filter(note => note.id === props.currentNote)[0]
									?.value ?? ''
							}
						/>
					</Form>
				</Segment>
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		setCurrentNote: id => dispatch({ type: 'CURRENT_NOTE', currentNoteId: id }),
		setNoteText: note => dispatch({ type: 'NOTE_TEXT', noteText: note }),
		setResultsCount: resultsCount =>
			dispatch({ type: 'RESULTS', resultsCount: resultsCount }),
	};
};

const mapStateToProps = state => {
	return {
		notes: state.notes,
		currentNote: state.currentNote,
		searchValue: state.searchValue,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNotes);
