import React from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.css';

function Form({ name, number, handlerOnChange, handlerSubmit }) {
  return (
    <>
      <form className={styles.list} onSubmit={handlerSubmit}>
        <label className={styles.listItemLable}>
          Name
          <input
            className={styles.listItem}
            type="text"
            name="name"
            value={name}
            onChange={handlerOnChange}
          />
        </label>
        <label className={styles.listItemLable}>
          Number
          <input
            className={styles.listItem}
            type="text"
            name="number"
            value={number}
            onChange={handlerOnChange}
          />
        </label>
        <button  className={styles.btnSubmit} type="submit">Add contact</button>
      </form>
    </>
  );
}

Form.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handlerOnChange: PropTypes.func.isRequired,
  handlerSubmit: PropTypes.func.isRequired,
};

export default Form;
