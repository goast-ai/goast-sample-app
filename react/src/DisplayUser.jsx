import { useState } from 'react';

function DisplayUser() {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

  return (
    <>
      <div>Firstname: {username.first}</div>
      <div>Lastname: {username.last}</div>
      <button onClick={() => setUsername(null)}>Clear Name</button>
      <button className="new-button" onClick={() => console.log("Button clicked!")}>New Button</button>
    </>
  );
}

export default DisplayUser;
