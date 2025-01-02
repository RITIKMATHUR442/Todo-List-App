import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Ritik Mathur. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/RITIKMATHUR442/Todo-List-App" className="icon github" />
          <a href="https://www.facebook.com/ritik.mathur.902/" className="icon facebook" />
          <a href="https://www.instagram.com/mr_mathur.902?igsh=MTI0OXhsYnBiNDU2eA==" className="icon instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
