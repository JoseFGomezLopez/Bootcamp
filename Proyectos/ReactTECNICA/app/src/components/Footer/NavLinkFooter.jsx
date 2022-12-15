import { NavLink } from "react-router-dom"

const NavLinkFooter = () => {
  return (
    <small className="smallLinks">
        <NavLink to="">
          <span>Home</span>
        </NavLink>
        <span>|</span>
        <NavLink to="terms&Conditions">
          <span>Terms and Conditions</span>
        </NavLink>
        <span>|</span>
        <NavLink to="privacyPolicy">
          <span>Privacy Policy</span>
        </NavLink>
        <span>|</span>
        <NavLink to="CollectionStatment">
          <span>Collection Statement</span>
        </NavLink>
        <span>|</span>
        <NavLink to="help">
          <span>Help</span>
        </NavLink>
        <span>|</span>
        <NavLink to="manageAccount">Manage Account</NavLink>
      </small>
  )
}

export default NavLinkFooter