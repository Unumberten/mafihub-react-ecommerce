import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const NavBar = () => {
  const { cartList } = useSelector((state) => state.cart);
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  function scrollHandler() {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else if (window.scrollY <= 50) {
      setIsFixed(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  const handleAuthSwitch = () => {
    setIsLogin(!isLogin);
    navigate(isLogin ? "/register" : "/login"); // Use navigate instead of history.push
  };

  return (
    <Navbar
      fixed="top"
      expand="md"
      className={isFixed ? "navbar fixed" : "navbar"}
    >
      <Container className="navbar-container">
        <Navbar.Brand to="/">
          <ion-icon name="bag"></ion-icon>
          <h1 className="logo">Agrifarm</h1>
        </Navbar.Brand>
        <div className="d-flex">
          <div className="media-cart">
            {/* Cart icon and other elements */}
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => {
              setExpand(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Item>
              <Link
                aria-label="Go to Home Page"
                className="navbar-link"
                to="/"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Home</span>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label="Go to Shop Page"
                className="navbar-link"
                to="/shop"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Shop</span>
              </Link>
            </Nav.Item>
     
            <Nav.Item>
              <button
                aria-label={isLogin ? "Go to Login Page" : "Go to Register Page"}
                className="navbar-link auth-toggle"
                onClick={handleAuthSwitch}
              >
                <span className="nav-link-label">{isLogin ? "Login" : "Register"}</span>
              </button>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label="Go to Cart Page"
                className="navbar-link"
                to="/cart"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Cart</span>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

