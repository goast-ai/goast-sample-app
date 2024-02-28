import { useState } from 'react';

function DisplayUser() {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

  const handleClearName = () => {
    setUsername({first: '', last: ''});
  };

  const renderUserInfo = () => {
    if (username.first === '' && username.last === '') {
      return <div>No user selected</div>;
    } else {
      return (
        <>
          <div>Firstname: {username.first}</div>
          <div>Lastname: {username.last}</div>
        </>
      );
    }
  };

  return (
    <>
      {renderUserInfo()}
      <button onClick={handleClearName}>Clear Name</button>
    </>
  );
}

export default DisplayUser;
