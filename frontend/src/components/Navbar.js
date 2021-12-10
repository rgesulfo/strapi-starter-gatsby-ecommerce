import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Navbar = () => (
  <div className="flex justify-between ml-6 mr-6 mt-4">
    <Link to="/">
      <a>
        <StaticImage
          src="./strapi.png"
          alt="home"
          className="logo"
          height="44"
          width="150"
        />
      </a>
    </Link>
    <button className="snipcart-checkout flex items-center">
      <StaticImage height="150" width="150" src="./cart.svg" alt="Cart" />
      <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
    </button>
  </div>
);

export default Navbar;
