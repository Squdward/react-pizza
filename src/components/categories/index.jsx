import React, { useState } from 'react';
import cn from 'classnames';
import './categories.scss';

const Categories = React.memo(({ value, onClick }) => {
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	return (
		<div className="categories">
			<ul>
				{categories.map((item, index) => (
					<li onClick={() => onClick(index)} className={cn({ ['active']: value === index })} key={index}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
});

export { Categories };
