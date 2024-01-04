import { useState } from 'react';

function DisplayUser() {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

6:  return (
7:    <>
8:      {username ? (
9:        <>
10:          <div>Firstname: {username.first}</div>
11:          <div>Lastname: {username.last}</div>
12:        </>
13:      ) : (
14:        <div>No user selected</div>
15:      )}
      <button onClick={() => setUsername(null)}>Clear Name</button>
    </>
  );
}

export default DisplayUser;
