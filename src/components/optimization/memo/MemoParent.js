import React, { useState } from 'react';
import MemoChild from './MemoChild';

function MemoParent() {
	console.log('parent memo');
	const [counter, setcounter] = useState(0);
	return (
		<div>
			{counter}
			<button onClick={() => setcounter((prev) => prev + 1)}>add</button>
			<MemoChild />
		</div>
	);
}

export default MemoParent;
