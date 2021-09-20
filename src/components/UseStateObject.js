import React, { useState } from 'react';

function UseStateObject() {
	const [user, setUser] = useState({});
	const changeUser = () => {
		/* this is not correct because reference not change  user.name = 'saad';
		user.age = 24; */
		setUser({ name: 'saad', age: 24 });
	};
	console.log('UseStateObject renderd');
	return (
		<div>
			{JSON.stringify(user)}
			<button onClick={changeUser}>Change User</button>
		</div>
	);
}

export default UseStateObject;
