import React, { useState } from 'react';
import ChildOne from './ChildOne';

function ParentOne({ children }) {
	console.log('parent one');
	const [counter, setcounter] = useState(0);
	return (
		<div>
			{counter}
			<button onClick={() => setcounter((prev) => prev + 1)}>add</button>
			{children}
		</div>
	);
}

export default ParentOne;
