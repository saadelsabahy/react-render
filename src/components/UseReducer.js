import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state = initialState, action) => {
	switch (action) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'RESET':
			return initialState;
		default:
			return state;
	}
};
function UseReducer() {
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log('UseReducer render');
	return (
		<div>
			<h1>{state}</h1>
			<button onClick={() => dispatch('INCREMENT')}>increase</button>
			<button onClick={() => dispatch('DECREMENT')}>decrease</button>
			<button onClick={() => dispatch('RESET')}>reset</button>
		</div>
	);
}

export default UseReducer;
