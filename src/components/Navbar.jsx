import { React, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
    const [expandNavbarMenu, setExpandNavbarMenu] = useState(false);

    const location = useLocation();

    useEffect(() => {
      setExpandNavbarMenu(false);
    }, [location])
    
  return (
    <div className="navbar" id={expandNavbarMenu ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() => {setExpandNavbarMenu((previous) => !previous);}}> Menu </button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/contact"> Contact Me </Link>
        </div>
    </div>
  )
}

export default Navbar