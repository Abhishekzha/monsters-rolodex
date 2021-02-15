import React from 'react';
import './search-field.styles.css';

const SearchField=({type,placeholder,onChange})=>{
    return(
        <div className='search-field'>
        <input className='input-field'
         type={type}
         placeholder={placeholder} 
         onChange={onChange} />
        </div>
    )
}

export default SearchField;