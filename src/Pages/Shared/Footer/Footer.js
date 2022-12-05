import React from "react";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content items-center mt-40">
        <div>
          <Link to="/">
            <h2 className="text-3xl font-bold">Recycle Me</h2>
          </Link>
          <div className=" flex w-3/4 justify-between mt-2">
            <Link>
              <FaFacebook className="text-xl hover:text-green-600"></FaFacebook>
            </Link>
            <Link>
              <FaInstagram className="text-xl hover:text-green-600"></FaInstagram>
            </Link>
            <Link>
              <FaTwitter className="text-xl hover:text-green-600"></FaTwitter>
            </Link>
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
