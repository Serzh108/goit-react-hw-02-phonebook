import React from 'react';
import PropTypes from 'prop-types';

function Filter({ contacts, filter, handlerOnChange }) {
  return (
    (contacts.length > 1) && (
      <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handlerOnChange}
      />
      </>
    )
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  handlerOnChange: PropTypes.func.isRequired,
};
export default Filter;
