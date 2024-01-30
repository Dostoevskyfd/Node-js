import Link from "next/link";
import {ROUTER} from"../app/router.enum.tsx/router.enum";
import React from "react";
import "../app/globals.css";
import "./header.css";

const Header = () => {
    const { HOME, CARDS } = ROUTER;
    return (
      <header className="header">
        
        <Link href={HOME} className="home"> Home </Link>
        <Link href={CARDS} className="cards"> Cards</Link>
        
        <p className="logo">
        Marvel Heroes
        </p>
      </header>
    );
  };
  
  export default Header;