import React from 'react';
import { Search } from 'semantic-ui-react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

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

	const isLoading = useSelector(state => state.searchReducer.isLoading);
	const resultsCount = useSelector(state => state.searchReducer.resultsCount);
	const dispatch = useDispatch();

	const setLoading = val => dispatch({ type: 'SET_LOADING', val: val });
	const setSearchValue = value => dispatch({ type: 'SEARCH', value: value });

	let timerId;
	const debounce = (debFunc, val, time) => {
		timerId = setTimeout(() => {
			debFunc(val);
			setLoading(false);
		}, time);
	};

	const handleSearchChange = (e, { value }) => {
		setLoading(true);
		clearTimeout(timerId);
		debounce(setSearchValue, value, 500);
	};

	return (
		<SearchStyle
			loading={isLoading}
			onSearchChange={handleSearchChange}
			size='big'
			results={[
				{
					title: props.isLoading
						? ''
						: resultsCount
						? resultsCount + ' results found'
						: '0 results found',
				},
			]}
		/>
	);
};

export default SearchNotes;
