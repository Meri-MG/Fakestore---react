import React from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

function SearchWidget({
  open, setOpen, handleSearch, handleSearchClick,
}) {
  const handleClick = () => {
    setOpen(!open);
    handleSearchClick();
  };

  return (
    <form action="" className={`search ${open && 'active'}`}>
      <input
        type="text"
        className="input"
        placeholder="search..."
        onChange={handleSearch}
        onClick={handleSearchClick}
      />
      <button
        type="button"
        className="btn"
        onClick={handleClick}
      >
        <BsSearch className="btn-icon" />
      </button>
    </form>
  );
}

SearchWidget.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
};

export default SearchWidget;
