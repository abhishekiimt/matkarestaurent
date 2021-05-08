import style from "../styles/Nav.module.css";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={style.header}>
      <div className={style.nav}>
        <div className={style.logo}>Logo</div>
          <ul className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick={showSidebar}>
            <li className={style.links}>
              <Link href="#">home</Link>
            </li>
            <li className={style.links}>
              <Link href="#">About</Link>
            </li>
            <li className={style.links}>
              <Link href="#">content</Link>
            </li>
            <li className={style.links}>
              <Link href="#">services</Link>
            </li>
          </ul>
          <div className={style.humburger} onClick={showSidebar}>
              <div className={style.line}></div>
              <div className={style.line}></div>
              <div className={style.line}></div>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
