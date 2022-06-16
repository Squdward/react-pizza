import { Link } from 'react-router-dom';
import emptyCart from './assets/empty-cart.png';
import { FC } from 'react';

const EmptyCart: FC = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={emptyCart} alt="Empty cart" />
        <a href="/" className="button button--black">
          <Link to="/">
            <span>Вернуться назад</span>
          </Link>
        </a>
      </div>
    </div>
  );
};

export default EmptyCart;
