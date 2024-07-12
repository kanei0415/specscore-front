'use client';

import { useCallback, useState } from 'react';
import Search from '../Search';

const SearchContainer = () => {
  const [list, setList] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [tag, setTag] = useState<string | null>(null);

  const onSearchClicked = useCallback(() => {
    setList([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ]);
  }, []);

  return (
    <Search
      list={list}
      tag={tag}
      onChange={setSearchInput}
      onTagSelected={setTag}
      onSearchClicked={onSearchClicked}
    />
  );
};

export default SearchContainer;
