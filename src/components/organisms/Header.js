import React from 'react';
import styled from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';
import Heading from '../atoms/Heading';
import SearchNotes from '../atoms/SearchNotes';
import { useDispatch } from 'react-redux';

const ButtonStyle = styled(Button)`
	margin: 15px !important;
	padding: 10px !important;
	background: white !important;
`;

const IconStyle = styled(Icon)`
	margin: 0px !important;
`;

const HeaderWrapper = styled.div`
	display: flex;
`;

const Header = () => {
	const dispatch = useDispatch();
	const onCreateNote = () => dispatch({ type: 'CREATE_NOTE' });
    const onDeleteNote = () => dispatch({ type: 'DELETE_NOTE' });
	return (
		<HeaderWrapper>
			<Heading color='teal' fontsize='15px'>
				Hari's Notepad
			</Heading>
			<ButtonStyle width='100px' height='50px' onClick={onCreateNote}>
				<IconStyle name='edit outline' size='big' color='teal' />
			</ButtonStyle>
			<ButtonStyle width='60px' height='40px' onClick={onDeleteNote}>
				<IconStyle name='trash alternate' size='big' color='teal' />
			</ButtonStyle>
			<SearchNotes></SearchNotes>
		</HeaderWrapper>
	);
};

export default Header;
