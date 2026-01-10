import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      {/* Services */}
      <nav>
        <h6 className="footer-title">Services</h6>
        <a href="#branding" className="link link-hover">
          Branding
        </a>
        <a href="#design" className="link link-hover">
          Design
        </a>
        <a href="#marketing" className="link link-hover">
          Marketing
        </a>
        <a href="#advertisement" className="link link-hover">
          Advertisement
        </a>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <a href="#about" className="link link-hover">
          About us
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
        <a href="#jobs" className="link link-hover">
          Jobs
        </a>
        <a href="#press" className="link link-hover">
          Press kit
        </a>
      </nav>

      {/* Legal */}
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a href="#terms" className="link link-hover">
          Terms of use
        </a>
        <a href="#privacy" className="link link-hover">
          Privacy policy
        </a>
        <a href="#cookies" className="link link-hover">
          Cookie policy
        </a>
      </nav>

      {/* Contact & Social */}
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a href="mailto:info@krishi.com" className="link link-hover">
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
