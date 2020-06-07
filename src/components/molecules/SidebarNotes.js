import React from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import styled from 'styled-components';

const SidebarPushable = styled(Sidebar.Pushable)`
	display: flex;
	margin-top: 0px !important;
	border: 2px teal solid !important;
	width: 60%;
`;

const SidebarMenu = styled.div`
	position: static !important;
`;

const SidebarNotes = props => {
	return (
		<SidebarPushable as={Segment}>
			<SidebarMenu>
				<Sidebar
					as={Menu}
					animation='overlay'
					icon='labeled'
					vertical
					visible
					width='wide'
				>
					<Menu.Item to='/admin'>
						<Icon name='building' />
						Rubykraft
					</Menu.Item>
					<Menu.Item as='a'>
						<Icon name='user' />
						Shan
					</Menu.Item>
					<Menu.Item as='a'>
						<Icon name='user' />
						Vishnu
					</Menu.Item>
				</Sidebar>
			</SidebarMenu>
			<Sidebar.Pusher>
				<Segment basic>
					<Header as='h3'>Application Content</Header>
					<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
				</Segment>
			</Sidebar.Pusher>
		</SidebarPushable>
	);
};
export default SidebarNotes;
