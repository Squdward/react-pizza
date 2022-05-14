import {useState} from 'react';
import './categories.scss';

const Categories = () => {
	const [selected, setSelected] = useState('Все');

	const setOption = (val) => {
		setSelected(val);
	}

	return (
		<div className="categories">
			<ul>
				<li 
					onClick={setOption.bind(null, 'Все')}
					className={`${selected === 'Все' ? 'active' : ''}`}
					>Все</li>
				<li 
					onClick={setOption.bind(null, 'Мясные')}
					className={`${selected === 'Мясные' ? 'active' : ''}`}
					>Мясные</li>
				<li 
					onClick={setOption.bind(null, 'Вегетарианская')}
					className={`${selected === 'Вегетарианская' ? 'active' : ''}`}
					>Вегетарианская</li>
				<li 
					onClick={setOption.bind(null, 'Гриль')}
					className={`${selected === 'Гриль' ? 'active' : ''}`}
					>Гриль</li>
				<li 
					onClick={setOption.bind(null, 'Острые')}
					className={`${selected === 'Острые' ? 'active' : ''}`}
					>Острые</li>
				<li 
					onClick={setOption.bind(null, 'Закрытые')}
					className={`${selected === 'Закрытые' ? 'active' : ''}`}
					>Закрытые</li>
			</ul>
		</div>
	)
}


export { Categories }