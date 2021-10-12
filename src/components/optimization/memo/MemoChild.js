import React, { memo } from 'react';

function MemoChild() {
	console.log('child memo');
	return <div></div>;
}

export default memo(MemoChild);
