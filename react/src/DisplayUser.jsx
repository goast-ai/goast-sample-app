import { useState } from 'react';

import PropTypes from 'prop-types';
function DisplayUser() {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

  return (
    <>
      {username && username.first ? (
          <div>Firstname: {username.first}</div>
          <div>Lastname: {username.last}</div>
        </>
      ) : (
        <div>User's name is not available.</div>
      )}
      <button onClick={() => setUsername({first: '', last: ''})}>Clear Name</button>
    </>
  );
DisplayUser.propTypes = {
  username: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string
  })
};
export default DisplayUser;
