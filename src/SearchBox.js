import React from 'react';
const SearchBox = ({searchfield,searchCHange}) =>
{
	return (

 <div className ='pa2'>
     <input 
     className = 'pa3 ba b--green bg-lightest-blue'
     type = 'search' 
     placeholder = 'search robot' 
     onChange ={searchCHange}
     />
</div>

		);
}

export default SearchBox;