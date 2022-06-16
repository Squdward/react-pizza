import { useState } from 'react';
import { Button } from '../button';
import cn from 'classnames';

import './pizzaBlock.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slice/cart';
import { FC } from 'react';
import { IPizza } from '../../@types/IPizza';

const PizzaBlock: FC<IPizza> = ({ id, category, imageUrl, price, rating, sizes, title, types }) => {
  // @ts-ignore
  const count = useSelector((state) => state.cart.items.find((item) => item.id === id))?.count;

  const dispatch = useDispatch();
  const [taste, setTaste] = useState<number>(types[0]);
  const [size, setSize] = useState(0);

  const tasteTypes = ['Тонкое', 'Традиционное'];

  const selectTaste = (taste: number): void => {
    setTaste(taste);
  };

  const selectSize = (size: number): void => {
    setSize(size);
  };

  const addPizza = () => {
    dispatch(
      //@ts-ignore
      addItem({
        id,
        title,
        imageUrl,
        price,
        type: tasteTypes[taste],
        size: sizes[size],
      }),
    );
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={title} />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((item, index) => (
            <li
              className={cn({ ['active']: taste === item })}
              key={index}
              onClick={selectTaste.bind(this, item)}>
              {tasteTypes[item]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((item, index) => (
            <li
              className={cn({ ['active']: size === index })}
              key={index}
              onClick={selectSize.bind(this, index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={addPizza} className={'button--outline button--add'}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {count > 0 && <i>{count}</i>}
        </Button>
      </div>
    </div>
  );
};

export default PizzaBlock;
