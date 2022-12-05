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
    <header className={styles.brand}>
      <nav>
        <div className={styles.brandLogo}>
          <h3>Logo</h3>
        </div>
        <div className={styles.branddropdown}>
          <button> button</button>
          <button onClick={() => setdropDown(!dropDown)} className="dropbtn"><i className="bi bi-list"></i></button>
        </div>
        {dropDown ? (<div>        {navLinks.map((link, index) => {
          return (
            <div id="myDropdown" key={index} className="branddropdowpcontent">
              <ul>
                <Link href={link.path}>
                  <li key={index}>{link.name}</li>
                </Link>
              </ul>
            </div>
          );
        })}</div>) : null}

      </nav>

    </header >
  );
}