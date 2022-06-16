import React, { FC } from 'react';
import cn from 'classnames';
import './categories.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategoryId } from '../../redux/slice/filter';

const Categories: FC = React.memo(() => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  // @ts-ignore
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const changeCategory = (val: number) => {
    dispatch(changeCategoryId(val));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => changeCategory(index)}
            className={cn({ ['active']: categoryId === index })}
            key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
