import React from 'react';
import { Search } from 'semantic-ui-react';
import styled from 'styled-components';

const SearchStyle = styled(Search)`
	margin: 15px !important;
	padding: 10px !important;
	color: teal;
	.search.icon {
		color: teal;
		font-weight: 900;
	}
	.prompt {
		border-color: teal !important;
	}
	input {
		width: 400px;
	}
`;

const SearchNotes = props => {
	return (
		<SearchStyle
			/* 			loading={isLoading}
			onResultSelect={this.handleResultSelect}
			onSearchChange={_.debounce(this.handleSearchChange, 500, {
				leading: true,
			})}
			results={results}
			value={value} */
			size='big'
		/>
	);
};

export default SearchNotes;
