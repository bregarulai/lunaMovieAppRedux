import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div>Luna Movie App</div>
      <div>&copy; {new Date().getFullYear()} Movie, Inc. or its affiliates</div>
    </div>
  );
};

export default Footer;
