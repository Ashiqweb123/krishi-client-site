import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      {/* Services */}

      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>

      {/* Legal */}
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to={"/terms"}>Terms and Condition</Link>
      </nav>

      {/* Contact & Social */}
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a href="mailto:rabiulazim430@gmail.com" className="link link-hover">
          info@krishi.com
        </a>
        <a href="tel:+880123456789" className="link link-hover">
          +880 1234 56789
        </a>
        <a
          href="https://goo.gl/maps/example"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          Dhaka, Bangladesh
        </a>

        <div className="flex gap-4 mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Twitter
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
