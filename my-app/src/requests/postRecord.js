// postRecord.js - Passes the POST API request from React to Express server

// Connect with the Express server
const addRecordEndpoint = 'http://localhost:5000/postData';

export default async function postRecord(title, theme) {

  /* Pass the POST API request from React to Express server */
  // - - - - - - - START - - - - - - - -

  const recordBodyParameters = {
    'title': title,
    theme // ES6 syntax that functions the same as above
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recordBodyParameters)
  }

  const response = await fetch(addRecordEndpoint, options);
  const jsonResponse = await response.json();

  console.log(JSON.stringify(jsonResponse));

  return jsonResponse;

  // - - - - - - - END - - - - - - - - -
};