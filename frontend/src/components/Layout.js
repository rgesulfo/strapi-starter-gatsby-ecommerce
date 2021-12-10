import React from "react";
import CategoryButtons from "./CategoryButtons";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/index.css";

const Layout = ({
  children,
  categories,
}) => (
  <div className="flex justify-center bg-gray-200">
    <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
      <Navbar />
      <CategoryButtons categories={categories} />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
    {/* <div
      hidden
      id="snipcart"
      data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
    /> */}
  </div>
);

export default Layout;
