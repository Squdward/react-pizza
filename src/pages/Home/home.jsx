import { useCallback, useEffect, useState } from 'react';
import { Categories } from '../../components/categories';
import { Header } from '../../components/header';
import { PizzaBlock } from '../../components/pizzaBlock';
import { PizzaSkeleton } from '../../components/pizzaBlock/skeleton';
import { Sort } from '../../components/sort';

function Home() {
	const [pizzas, setPizzas] = useState();
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useState(0)
	const [sort, setSort] = useState(0);

	const options = [{
		title: 'популярности',
		name: 'rating',
	},
	{
		title: 'цене',
		name: 'price',
	},
	{
		title: 'алфавиту',
		name: 'alphabet',
	},
	]

	const getPizzas = async () => {
		!loading && setLoading(true);

		const categoryRequest = `${category > 0 ? 'category=' + category : ''}`
		const sortRequest = `&sortBy=${options[sort].name}&order=desc`

		const response = await fetch(`https://6282c8d492a6a5e46219b5d4.mockapi.io/pizzas?${categoryRequest}${sortRequest}`);
		const data = await response.json();

		setPizzas(data)
		setLoading(false);
	}

	useEffect(() => {
		getPizzas()
	}, [category, sort]);

	const changeCategory = useCallback((val) => {
		setCategory(val)
	}, [])

	const changeSort = (val) => {
		setSort(val)
	}

	const skeletonArray = [...new Array(6)];

	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<div className="content">
					<div className="container">
						<div className="content__top">
							<Categories value={category} onClick={changeCategory} />
							<Sort value={sort} onClick={changeSort} options={options} />
						</div>
						<h2 className="content__title">Все пиццы</h2>
						<div className="content__items">
							{loading && skeletonArray.map((_, index) => <PizzaSkeleton key={index} />)}
							{!loading && pizzas.map((pizza) => (
								<PizzaBlock
									category={pizza.category}
									image={pizza.imageUrl}
									price={pizza.price}
									rating={pizza.rating}
									sizes={pizza.sizes}
									name={pizza.title}
									type={pizza.types}
									key={pizza.id}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div >
	);
}

export { Home };
