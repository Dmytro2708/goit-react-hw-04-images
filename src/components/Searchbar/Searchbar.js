import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarBtn,
  SearchbarInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValue);
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
          value={inputValue}
          onChange={handleInputChange}
        />
      </SearchbarForm>
    </SearchbarHeader>
  );
};
