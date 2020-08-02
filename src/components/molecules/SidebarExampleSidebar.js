import React from 'react';
import { Menu, Segment, Sidebar, Form, TextArea } from 'semantic-ui-react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const SidebarExampleSidebar = props => {
	const handleChange = event => {
		props.setNoteText(event.target.value);
		console.log(event.target.value);
	};

	return (
		<Sidebar.Pushable as={Segment}>
			<Sidebar as={Menu} icon='labeled' vertical visible={true} width='thin'>
				{props?.notes.map(note => {
					const selected =
						note?.id === props?.currentNote
							? 'rgba(0, 168, 168, 0.25)'
							: 'white';
					console.log(selected);
					return (
						<Menu.Item
							as='a'
							key={note?.id}
							onClick={() => props?.setCurrentNote(note.id)}
							style={{ backgroundColor: selected }}
						>
							<p>{note?.id}</p>
							{console.log(note?.value)}
							<p>{note?.value.slice(0, 5)}</p>
						</Menu.Item>
					);
				})}
			</Sidebar>

			<Sidebar.Pusher>
				<Segment basic rows={20}>
					<Form>
						<TextArea
							rows={20}
							cols={100}
							placeholder={
								props?.notes.length ? 'Start writing your note...' : ''
							}
							onChange={handleChange}
							value={
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
	};
};

const mapStateToProps = state => {
	return {
		notes: state.notes,
		currentNote: state.currentNote,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SidebarExampleSidebar);
