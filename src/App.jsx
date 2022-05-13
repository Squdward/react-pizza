import './App.scss';
import { Categories } from './components/categories';
import { Header } from './components/header';
import { PizzaBlock } from './components/pizzaBlock';
import { Sort } from './components/sort';

function App() {
  return (
    <div className="App">
      <body>
        <div class="wrapper">
          <Header />
          <div class="content">
            <div class="container">
              <div class="content__top">
                <Categories />
                <Sort />
              </div>
              <h2 class="content__title">Все пиццы</h2>
              <div class="content__items">
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
