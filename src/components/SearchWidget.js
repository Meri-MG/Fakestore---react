import React from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

function SearchWidget({ open, setOpen, handleSearch }) {
  return (
    <form action="" className={`search ${open && 'active'}`}>
      <input
        type="text"
        className="input"
        placeholder="search..."
        onChange={handleSearch}
      />
      <button
        type="button"
        className="btn"
        onClick={() => setOpen(!open)}
      >
        <BsSearch className="btn-icon" />
      </button>
    </form>
  );
}

SearchWidget.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default SearchWidget;
