import "./Navbar.css";
import nav_logo from "../../assets/nav_logo.png";
import { useRef, useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  };

  return (
    <div className="navbar">
      <img src={nav_logo} alt="logo" className="logo" />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />
        {["home", "about", "skills", "projects", "work", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className="anchor-link"
              offset={80}
              href={`#${item}`}
              onClick={() => {
                setMenu(item);
                closeMenu(); // Close menu when a link is clicked
              }}
            >
              <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
            {menu === item && <img src={underline} alt="Underline" />}
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={80} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
