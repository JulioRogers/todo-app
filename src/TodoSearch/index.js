import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {



  return (
    <input 
    className="TodoSearch" 
    placeholder="Y ahora que?" 
    value={searchValue}
    onChange={(event) => {setSearchValue(event.target.value)}}/>
  );
}

export {TodoSearch};