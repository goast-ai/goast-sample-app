import { useState } from 'react';

function DisplayUser() {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

  return username ? (
    <>
      <div>Firstname: {username.first}</div>
      <div>Lastname: {username.last}</div>
      <button onClick={() => setUsername(null)}>Clear Name</button>
    </>
  ) : (
    <div>No user selected</div>
  );
}

export default DisplayUser;
