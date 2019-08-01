import React, {useState} from 'react';

function Item({data}) {
	const [done, setDone] = useState(false);

	const toggleItem = () => {
		setDone(done => !done);
	}

	return (
		<div className={`item ${done ? 'done' : ''}`} onClick={toggleItem}>{data.title}</div>
	)
}

export default Item;