import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearch } from '../../redux/slice/filter';
import style from './search.module.scss';

const Search = () => {
  // @ts-ignore
  const searchValue = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(e.target.value));
  };

  return (
    <>
      <input onChange={onChange} className={style.Input} value={searchValue} />
    </>
  );
};

export { Search };
