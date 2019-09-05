import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.inputElement = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      searchTerm: this.props.initialSearchTerm,
    };
  }

  componentDidMount() {
    this.focusInputElement();
  }

  focusInputElement = () => {
    this.inputElement.current.focus();
  };

  searchMovies = (searchTerm) => {
    this.props.searchMovies(searchTerm);
  }

  debouncedSearchMovies = debounce(this.searchMovies, 400);

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.debouncedSearchMovies(this.state.searchTerm);
    });
  };

  handleClick = (event) => {
    event.target.select();
  };

  render() {
    return (
      <div>
        <input className="form-control form-control-lg"
          type="text"
          ref={this.inputElement}
          value={this.state.searchTerm}
          placeholder="Search Movies by Title"
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default SearchBar;
