import React from 'react';

import logo from '../../../assets/logo.png';
import logosvg from '../../../assets/logo-set.svg';
import './Navbar.css';

const NavbarComp = () => {
  return (
    <nav>

      <div className='brand'>
        <div className="logoContainer">
          <img src={logo} alt="Colab Apes Logo" className="logo"/>
        </div>
        <div className='brandName'>
          <img src={logosvg} alt="Brand Name" />
        </div>
      </div>

      <div className='btn'>
        <button className='signIn'>Sign in</button>
        <button className='signUp'>Sign up</button>
      </div>

    </nav>
  )
}

export default NavbarComp