import { useEffect, useState } from 'react';
import './App.scss';
import { Categories } from './components/categories';
import { Header } from './components/header';
import { PizzaBlock } from './components/pizzaBlock';
import { PizzaSkeleton } from './components/pizzaBlock/skeleton';
import { Sort } from './components/sort';

function App() {
  const [pizzas, setPizzas] = useState();
  const [loading, setLoading] = useState(true);

  const getPizzas = async () => {
    const response = await fetch('https://6282c8d492a6a5e46219b5d4.mockapi.io/pizzas');
    const data = await response.json();

    setPizzas(data)
    setLoading(false);
  }

  useEffect(() => {
    getPizzas()
  }, []);

  const skeletonArray = [...new Array(6)];

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {loading && skeletonArray.map((item, index) => <PizzaSkeleton key={index} />)}
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

export default App;
