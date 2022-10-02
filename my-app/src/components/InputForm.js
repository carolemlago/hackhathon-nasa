// InputForm.js - Form component - Create a form that submits a POST request

// Import required files
import React, { useState } from 'react';

import getRecords from '../requests/getRecords.js';
import postRecord from '../requests/postRecord.js';

function InputForm(props) {

  /* Create the component that submits a POST request */
  // - - - - - - - START - - - - - - - -

  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState('');

  function buttonClick(title, theme) {
    postRecord(title,theme)
      .then(() => getRecords())
      .then(result => props.setListItems(result))
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleThemeChange(event) {
    setTheme(event.target.value);
  }

  return (
    <div>
      <form>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label>Theme: </label>
          <input
            type="text"
            value={theme}
            onChange={handleThemeChange}
          />
        </div>
        <button type="button" onClick={() => buttonClick(title, theme)}>Post to Kintone</button>
      </form>
    </div>
  );

  // - - - - - - - END - - - - - - - - -
};
export default InputForm;