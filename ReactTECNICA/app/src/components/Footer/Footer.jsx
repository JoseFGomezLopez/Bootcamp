import "./footer.css";
import InstitucionalBarComp from "./InstitucionalBarComp";

import NavLinkFooter from "./NavLinkFooter";
import SocialNavLinkFooter from "./SocialNavLinkFooter";

const Footer = () => {
  return (
    <footer className="footerCustom">
      <NavLinkFooter />
      <InstitucionalBarComp />
      <SocialNavLinkFooter /> 
    </footer>
  );
};

export default Footer;
