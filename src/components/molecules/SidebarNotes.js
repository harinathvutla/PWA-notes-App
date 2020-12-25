import React, {useState, useEffect} from 'react';
import { Menu, Segment, Sidebar, Form, TextArea, Button } from 'semantic-ui-react';
import Markdown from '../molecules/Markdown';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const ButtonsWrapper = styled.div`
display: flex;
justify-content: flex-end;
.ui.button {
	background-color: teal;
	color: white;
}
margin-right: 20px;
margin-top: 20px;
`;

const MarkdownWrapper = styled.div`
	height: 75vh !important;
	width: 100% !important;
	*{
		margin: 0;
	}
`;

const SidebarNotes = () => {

	const [edit, setEdit] = useState(false);

	const notes = useSelector(state => state.notesReducer.notes);
	const currentNote = useSelector(state => state.notesReducer.currentNote);
	const searchValue = useSelector(state => state.searchReducer.searchValue);
	const dispatch = useDispatch();

	const setCurrentNote = id => dispatch({ type: 'CURRENT_NOTE', currentNoteId: id });
	const setNoteText = note => dispatch({ type: 'NOTE_TEXT', noteText: note });
	const setResultsCount = resultsCount => dispatch({ type: 'RESULTS', resultsCount: resultsCount });

	const handleChange = event => {
		setNoteText(event.target.value);
		console.log(event.target.value);
	};

	 useEffect(() => {
		localStorage.setItem('notes',JSON.stringify(notes));
		localStorage.setItem('currentNote',JSON.stringify(currentNote));
	}, [notes, currentNote]); 

	const renderNotes = () => {
		let notesLocal;
		if (searchValue === '' || searchValue === undefined) {
			notesLocal = notes;
		} else {
			notesLocal = notes?.filter(note =>
				note.value.includes(searchValue),
			);

			setResultsCount(notesLocal.length);
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

	const showEdit = () => {
		if(edit)
		{
			setEdit(false);
		}
		else
		{
			setEdit(true);
		}
	}

	const notesTextDisplay = () => {
		if(edit)
		{
			return (<TextArea
				style= {{height: "80vh", width: "100%"}}
					placeholder={
						notes.length ? 'Start writing your note...' : ''
					}
					onChange={handleChange}
					value={
						notes?.filter(note => note.id === currentNote)[0]
							?.value ?? ''
					}
				/>);
		}
		else
		{
			return (
				<MarkdownWrapper>
					<Markdown
						input={
							notes?.filter(note => note.id === currentNote)[0]?.value ?? ''
						}
					/>
				</MarkdownWrapper>
			);
		}
	}

	return (
		<Sidebar.Pushable as={Segment} style={{border: "solid 1px teal"}}>
			<Sidebar as={Menu} icon='labeled' vertical visible={true} width='thin' 
			style={{border: "0px"}}
			>
				{renderNotes()}
			</Sidebar>
			<Sidebar.Pusher>
				<Segment basic>
					<Form style={{maxWidth: "85%"}}>
						{notesTextDisplay()}
						<ButtonsWrapper>
							<Button onClick={()=>showEdit()}>{edit?'Save':'Edit'}</Button>
						</ButtonsWrapper>
					</Form>
				</Segment>
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	);
};

export default SidebarNotes;
