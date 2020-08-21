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
			props.setLoading(false);
		}, time);
	};

	const handleSearchChange = (e, { value }) => {
		props.setLoading(true);
		clearTimeout(timerId);
		debounce(props?.setSearchValue, value, 500);
	};

	return (
		<SearchStyle
			loading={props?.isLoading}
			onSearchChange={handleSearchChange}
			size='big'
			results={[
				{
					title: props.isLoading
						? ''
						: props.resultsCount
						? props.resultsCount + ' results found'
						: '0 results found',
				},
			]}
		/>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		setLoading: val => dispatch({ type: 'SET_LOADING', val: val }),
		setSearchValue: value => dispatch({ type: 'SEARCH', value: value }),
	};
};

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		resultsCount: state.resultsCount,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchNotes);
