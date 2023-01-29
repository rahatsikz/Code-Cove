import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 border-t border-slate-200 bg-gray-900 text-primary-content">
        <div>
          <img src={logo} alt="" width="100" />
          <p className="font-bold">
            CodeCove Ltd. <br />
            Providing reliable services since 2010
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <FaTwitter className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
