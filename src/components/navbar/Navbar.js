import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#home" className="logo">Dev.</a>
        <ul className={`navMenu ${isActive ? 'active' : ''}`}>
          <li onClick={removeActive}>
            <a href="#home" className="navLink">Home</a>
          </li>
          <li onClick={removeActive}>
            <a href="#catalog" className="navLink">Catalog</a>
          </li>
          <li onClick={removeActive}>
            <a href="#all-products" className="navLink">All products</a>
          </li>
          <li onClick={removeActive}>
            <a href="#contact" className="navLink">Contact</a>
          </li>
        </ul>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
