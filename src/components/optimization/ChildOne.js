import React from 'react';

function ChildOne({ count }) {
	console.log('child one');
	return <div>child count {count}</div>;
}

export default ChildOne;
