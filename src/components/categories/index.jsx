import { useState } from 'react';
import cn from 'classnames';
import './categories.scss';

const Categories = () => {
	const [selected, setSelected] = useState('Все');
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	const setOption = (val) => {
		setSelected(val);
	};

	return (
		<div className="categories">
			<ul>
				{categories.map((item, index) => (
					<li onClick={setOption.bind(null, item)} className={cn({ ['active']: selected === item })} key={index}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export { Categories };
