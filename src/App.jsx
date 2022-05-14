import './App.scss';
import { Categories } from './components/categories';
import { Header } from './components/header';
import { PizzaBlock } from './components/pizzaBlock';
import { Sort } from './components/sort';

function App() {
  return (
    <div classNameName="App">
      <body>
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
                <PizzaBlock />
                <PizzaBlock />
                <PizzaBlock />
                <PizzaBlock />
                <PizzaBlock />
                <PizzaBlock />
                <PizzaBlock />
                <PizzaBlock />
              </div>
            </div>
          </div>
        </div>
      </body>
    </div >
  );
}

export default App;
