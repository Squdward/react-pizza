import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPizza } from '../../@types/IPizza';
import { Categories } from '../../components/categories/index';
import { Header } from '../../components/header/index';
import { PizzaBlock } from '../../components/pizzaBlock/index';
import { PizzaSkeleton } from '../../components/pizzaBlock/skeleton';
import { Sort } from '../../components/sort/index';
import { getPizza } from '../../redux/slice/pizza';
import { RootState, useAppDispatch } from '../../redux/store';

const Home: FC = () => {
  const { categoryId, sortId, search } = useSelector((state: RootState) => state.filter);
  const { pizzas, isLoading } = useSelector((state: RootState) => state.pizza);
  const dispatch = useAppDispatch();

  const options = [
    {
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
  ];

  useEffect(() => {
    const categoryRequest: string = `${categoryId > 0 ? '' + categoryId : ''}`;
    const sortRequest: string = `${options[sortId].name}`;

    dispatch(getPizza({ categoryRequest, sortRequest, search }));
  }, [categoryId, sortId, search]);

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => <PizzaSkeleton key={index} />);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort options={options} />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading && skeleton}
              {!isLoading &&
                pizzas.map((pizza: IPizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
