import { useDebounce } from 'ahooks';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearch } from '../../redux/slice/filter';
import { RootState } from '../../redux/store';
import style from './search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, { wait: 500 });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(changeSearch(debouncedValue));
  }, [debouncedValue]);

  return (
    <>
      <input onChange={onChange} className={style.Input} value={value} />
    </>
  );
};

export { Search };
