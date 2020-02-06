import React, { useState } from 'react';
import Characters from './character/Characters';
// will I need a characterDetailNameSearch?

const DisplayCharacters = () => {
  const [display, setDisplay] = useState('');

  return (
    <>
      <Characters display={display}/>
    </>
  );
};
export default DisplayCharacters;
