import React, { useState } from "react";
import Navprops from "./navprops";
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'gatsby'
import Native_logo from '../img/2022_native4a_logo.svg'

import * as styles from '../styles/navigation.module.css'

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div>
        <Link to="/" >
          <img class="text-2xl font-medium text-blue-500" src={Native_logo} alt="hello"/>
        </Link>
      </div>
      <div>
      {isOpen ? <Navprops /> : null}
      </div>
      <div>
       <Hamburger size={20} label="Show menu" toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
};

export default Navigation;