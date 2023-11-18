import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarBtn,
  SearchbarInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchItem, setSearchItem] = useState('');

  const handleInputChange = event => {
    setSearchItem(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchItem);
  };

  return (
    <SearchbarHeader>
      <SearchbarForm onSubmit={handleSubmit}>
        <SearchbarBtn type="submit">
          <FaSearch width="14" height="14" />
        </SearchbarBtn>
        <SearchbarInput
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          value={searchItem}
          onChange={handleInputChange}
        />
      </SearchbarForm>
    </SearchbarHeader>
  );
};
