import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IPizza } from '../../@types/IPizza';
import { getPizza } from '../../redux/slice/pizza';
import { RootState, useAppDispatch } from '../../redux/store';
import ReactPaginate from 'react-paginate';
import { changePageNumber } from '../../redux/slice/filter';
import { Categories, Header, PizzaBlock, PizzaSkeleton, Sort } from '../../components';

const Home: FC = () => {
  const { categoryId, sortId, search, pageNumber } = useSelector(
    (state: RootState) => state.filter,
  );
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
    const page: any = pageNumber;

    dispatch(getPizza({ categoryRequest, sortRequest, search, page }));
  }, [categoryId, sortId, search, pageNumber]);

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
            <ReactPaginate
              pageCount={2}
              className={'pagination'}
              nextLabel={'>'}
              previousLabel={'<'}
              onPageChange={({ selected }) => dispatch(changePageNumber(selected + 1))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
