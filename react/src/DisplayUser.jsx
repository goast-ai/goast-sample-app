import { useState } from 'react';

function DisplayUser() {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

  return (
      {username ? (
        <>
          <div>Firstname: {username.first}</div>
          <div>Lastname: {username.last}</div>
        </>
      ) : (
        <div>No user selected</div>
      )}
      <button onClick={() => setUsername(null)}>Clear Name</button>
    </>
  );
}

export default DisplayUser;
