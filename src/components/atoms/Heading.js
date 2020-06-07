import React from 'react';
import styled from 'styled-components';

const Heading5 = styled.h5`
	font-size: ${prop => (prop.fontsize ? prop.fontsize : 'black')};
	color: ${prop => (prop.color ? prop.color : '10px')};
	padding: 10px 20px;
	margin: auto 0 !important;
`;
const Heading = props => {
	console.log(props);
	return (
		<Heading5 color={props.color} fontsize={props.fontsize}>
			{props.children}
		</Heading5>
	);
};

export default Heading;
