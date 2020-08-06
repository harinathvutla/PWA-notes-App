import React from 'react';
import { Search } from 'semantic-ui-react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
		width: 300px;
	}
`;

const SearchNotes = props => {
	let timerId;
	const debounce = (debFunc, val, time) => {
		timerId = setTimeout(() => {
			debFunc(val);
		}, time);
	};

	const handleSearchChange = (e, { value }) => {
		clearTimeout(timerId);
		debounce(props?.setSearchValue, value, 3000);
	};

	return (
		<SearchStyle
			loading={props?.isLoading}
			onSearchChange={handleSearchChange}
			size='big'
		/>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		setLoading: () => dispatch({ type: 'SET_LOADING' }),
		resetLoading: () => dispatch({ type: 'RESET_LOADING' }),
		setSearchValue: value => dispatch({ type: 'SEARCH', value: value }),
	};
};

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchNotes);
