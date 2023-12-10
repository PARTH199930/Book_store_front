import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell your books", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];
  return (
    <>
    <header>
      <ul className="md:flex space-x-12 hidden">
        {navItems.map(({ link, path }) => {
          {
            console.log(link);
          }
          return (
            <Link key={path} to={path}>
              {link}
            </Link>
          );
        })}
      </ul>


      
      </header>
    </>
  );
};

export default Header;
