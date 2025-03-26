import { Link, NavLink } from "react-router-dom";

function Navbar1() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: '#333',
        color: 'white',
      }}
    >
      <div className="logo" style={{ fontSize: '24px', fontWeight: 'bold' }}>
        React App
      </div>

      <div className="links" style={{ display: 'flex' }}>
        {/* Home link */}
        <NavLink
          to="/homepage"
          className={({ isActive }) => (isActive ? 'active' : 'link')}
          style={{ margin: '0 15px', textDecoration: 'none', color: 'white' }}
        >
         Home 

        </NavLink>
       

        {/* About link */}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : 'link')}
          style={{ margin: '0 15px', textDecoration: 'none', color: 'white' }}
        >
          About
        </NavLink>

        {/* Services link  */}
         <NavLink
          to="/product"
          className={({ isActive }) => (isActive ? 'active' : 'link')}
          style={{ margin: '0 15px', textDecoration: 'none', color: 'white' }}
        >
          Product
        </NavLink> 

        {/* Contact link */}
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : 'link')}
          style={{ margin: '0 15px', textDecoration: 'none', color: 'white' }}
        >
          Contact
        </NavLink>
      </div>

      {/* Login button */}
      <div className="login" style={{ marginLeft: 'auto' }}>
        <Link
          to="/login"
          className="login-link"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <button
            style={{
              padding: '5px 10px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar1;
