import React, { useState } from 'react';
import {
	Header,
	Icon,
	Image,
	Menu,
	Segment,
	Sidebar,
	Form,
	TextArea,
} from 'semantic-ui-react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const SidebarPushable = styled(Sidebar.Pushable)`
	display: flex;
	margin-top: 0px !important;
	border: 2px teal solid !important;
	width: 60%;
	padding: 0px !important;
`;

const SidebarMenu = styled.div`
	position: static !important;
	width: 30%;
`;

const SidebarPusher = styled(Sidebar.Pusher)`
	div {
		padding: 0px !important;
	}
`;

const SidebarMenuItem = styled(Sidebar)`
	width: 100% !important;
	height: 100% !important;
	a {
		border-bottom: 1px solid teal;
	}
`;

const SidebarNotes = props => {
	const [noteText, setnoteText] = useState('');

	const handleChange = event => {
		setnoteText(event.target.value);
		console.log(event.target.value);
	};

	return (
		<SidebarPushable as={Segment}>
			<SidebarMenu>
				<SidebarMenuItem
					as={Menu}
					animation='overlay'
					icon='labeled'
					vertical
					visible='true'
				>
					{props.notes.map(note => (
						<Menu.Item as='a' key={note.id}>
							<p>{note.id}</p>
							<p>{note.value.slice(0, 5)}</p>
						</Menu.Item>
					))}
				</SidebarMenuItem>
			</SidebarMenu>
			<SidebarPusher>
				<Segment basic>
					<Form>
						<TextArea
							rows={20}
							cols={100}
							placeholder='Start writing your note...'
							onChange={handleChange}
						/>
					</Form>
				</Segment>
			</SidebarPusher>
		</SidebarPushable>
	);
};

const mapStateToProps = state => {
	return {
		notes: state.notes,
	};
};

export default connect(mapStateToProps)(SidebarNotes);
