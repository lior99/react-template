import React, {useState} from 'react';

function Item({data}) {
	const [done, setDone] = useState(false);
	
	return (
		<div className={`item ${done ? 'done' : ''}`} onClick={() => setDone(done => !done)}>{data.title}</div>
	)
}

export default Item;