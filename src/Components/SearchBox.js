import React from 'react';

const SearchBox = ({searchfield , searchChange}) =>{
    return(
        <div className= "pa3">
            <input type="text"  className = " pa3 ba .bg-lightest-blue input" placeholder = "Search Robot" onChange={searchChange} />
        </div>
        
    );
}

export default SearchBox;