import { Component } from 'react';
import { FaSearch  } from 'react-icons/fa';

import { SearchbarHeader, SearchbarForm, SearchbarBtn, SearchbarInput } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    onSubmit: '',
  };

  handleInputChange = event => {
    this.setState({ onSubmit: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.onSubmit);
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchbarForm onSubmit={this.handleSubmit}>
          <SearchbarBtn type="submit">
            <FaSearch  width="14" height="14"/>
            </SearchbarBtn>
          <SearchbarInput
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            value={this.state.onSubmit}
            onChange={this.handleInputChange}
          />
        </SearchbarForm>
      </SearchbarHeader>
    );
  }
}
