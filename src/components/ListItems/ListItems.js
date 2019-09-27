import React from 'react';
import Item from '../Item/Item';

function ListItems() {
	const items = [{ id: 1, title: 'some title' }, { id: 2, title: 'number 2' }, { id: 3, title: 'number 3' }];

	return (
		<>
			<div>Click on item will toggle it's state</div>
			<div className="container">
				{items.map(item => (
					<Item data={item} key={item.id} />
				))}
			</div>
		</>
	);
}

export default ListItems;
