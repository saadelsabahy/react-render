import { useState } from 'react';

function UseState() {
	const [count, setCount] = useState(0);
	console.log('useState render');
	const increase = () => setCount((prev) => prev + 1);
	const increaseByFive = () => setCount(5);
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increase}>increase</button>
			<button onClick={() => setCount(0)}>reset</button>
			<button onClick={increaseByFive}>increase 5</button>
		</div>
	);
}

export default UseState;
