import { useState } from 'react';
import ChildOne from './components/optimization/ChildOne';
import MemoParent from './components/optimization/memo/MemoParent';
import ParentOne from './components/optimization/ParentOne';
import UseReducer from './components/UseReducer';
import UseState from './components/UseState';
import UseStateObject from './components/UseStateObject';

function App() {
	const [childCount, setchildCount] = useState(0);
	return (
		<div className='App'>
			{/* <UseState /> */}
			{/* <UseReducer /> */}
			{/* <UseStateObject /> */}
			<button onClick={() => setchildCount((prev) => prev + 1)}>
				child count
			</button>
			<ParentOne>
				<ChildOne count={childCount} />
			</ParentOne>
			{/* <MemoParent /> */}
		</div>
	);
}

export default App;
