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
      <div className="grid grid-cols-6 gap-4 justify-items-end items-center">
        <Link to="/" >
          <img class="font-medium text-blue-500" src={Native_logo} alt="hello"/>
        </Link>
        <div className="col-start-2 col-span-4">
          {isOpen ? <Navprops /> : null}
        </div>
        <div>
          <Hamburger size={20} label="Show menu" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;