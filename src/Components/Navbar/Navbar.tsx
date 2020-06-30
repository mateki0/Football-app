import React from 'react';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
  
  
const Navbar = () =>{
  
    return(
        <div>
            <NavLinks/>
            <SearchBar/>
        </div>
    )
}
export default Navbar;