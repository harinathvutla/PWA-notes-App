import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = props => {
	const input = '# This is a header\n\n And this a para';
	return <ReactMarkdown source={props.input} />;
};

export default Markdown;
