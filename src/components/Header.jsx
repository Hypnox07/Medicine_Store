import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from '../features/auth/authSlice';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage
    dispatch(logoutSuccess());
    navigate("/");
  };

  return (
    <header className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className="container">
        <NavLink className="navbar-brand" to="/">Medical Store</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link bg-danger rounded-3 me-2 text-center text-capitalize text-white" to="/signup">Signup</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link bg-primary rounded-3 text-center text-capitalize text-white" to="/login">Login</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/add-medicine">Add Medicine</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/medicine-list">Medicine List</NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link text-white" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
