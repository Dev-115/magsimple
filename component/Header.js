import React from "react";
import Link from "next/link";
// import styles from '../styles/global.css';


const navLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact Us",
    path: "#contact",
  },
];

export default function Header() {

  const [dropDown, setdropDown] = React.useState(false);

  return (
    <header className="main_nav">
      <nav className="nav_box">
        <div className="nav_item">
          <h3>Logo</h3>
        </div>
        <div></div>
        <div className="nav_item">
          <button className="btn_primary"> button</button>
        </div>
        {/* <div className="nav_item">
          <button onClick={() => setdropDown(!dropDown)} className="dropbtn btn_secondary"><i className="bi bi-list"></i></button>
        </div> */}
      </nav>
      {/* {dropDown ? (<div>        {navLinks.map((link, index) => {
          return (
            <div id="myDropdown" key={index} className="">
              <ul>
                <Link href={link.path}>
                  <li key={index}>{link.name}</li>
                </Link>
              </ul>
            </div>
          );
        })}</div>) : null} */}
    </header >
  );
}