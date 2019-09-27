import React, { useState } from 'react';

function Item({ data }) {
	const [done, setDone] = useState(false);

	const className = `item ${done ? 'done' : ''}`;

	return (
		<div
			className={className}
			onClick={() => setDone(done => !done)}
		>
			<input
				type="checkbox"
				className="checkbox-box"
				checked={done ? 'checked' : ''}
			/>
			{data.title}
		</div>
	);
}

export default Item;
