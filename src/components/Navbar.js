import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/Authenticate';

export function Navbar(){
  const { user, logoutUpdate } = useAuth();
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to=''>REACT PROJECT</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link"  to= ''> Home</Link>
            {
              user ?  <>
                <Link className="nav-link"  to= 'counter'> Counter</Link>
                <Link className="nav-link"  to= 'products'> Products</Link>
                <Link className="nav-link"  to= 'cart'> Cart</Link>
                <button className="btn my-buttons" onClick={logoutUpdate}>Logout</button>
                {/* add user Asiigment */}
              </> : <Link className="nav-link"  to= 'login'> login</Link>
            }
          </div>
        </div>
      </div>
      </nav>
    )
}