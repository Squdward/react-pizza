import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories } from '../../components/categories';
import { Header } from '../../components/header';
import { PizzaBlock } from '../../components/pizzaBlock';
import { PizzaSkeleton } from '../../components/pizzaBlock/skeleton';
import { Sort } from '../../components/sort';
import { changeCategoryId } from '../../redux/slice/filterSlice';
import { changeSortId } from '../../redux/slice/sortSlice';

function Home() {
	const category = useSelector(state => state.filter.categoryId);
	const sortId = useSelector(state => state.sort.sortId);
	const [pizzas, setPizzas] = useState();
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

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

	useEffect(() => {
		const getData = async () => {
			!loading && setLoading(true);

			const categoryRequest = `${category > 0 ? 'category=' + category : ''}`
			const sortRequest = `&sortBy=${options[sortId].name}&order=desc`

			const response = await fetch(`https://6282c8d492a6a5e46219b5d4.mockapi.io/pizzas?${categoryRequest}${sortRequest}`);
			const data = await response.json();

			setPizzas(data)
			setLoading(false);
		}

		getData()
	}, [category, sortId]);

	const changeCategory = useCallback((val) => {
		dispatch(changeCategoryId(val))
	}, [])

	const changeSort = (val) => {
		dispatch(changeSortId(val))
	}

	const skeleton = [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => <PizzaSkeleton key={index} />)


	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<div className="content">
					<div className="container">
						<div className="content__top">
							<Categories
								value={category}
								onClick={(changeCategory)}
							/>

							<Sort
								value={sortId}
								onClick={changeSort}
								options={options}
							/>
						</div>

						<h2 className="content__title">Все пиццы</h2>
						<div className="content__items">
							{loading && skeleton}
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
