import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoCorona } from "../../assets/crown.svg";
import CartIcon from "../cartIcon/cartIcon";
import { UserContext } from "../../contexts/user-context";
import { signOutUser } from "../../utils/fire-base";
import "./nav-bar.css";
import CartDropDown from "../cartDropDown/cartDropDown";

const NavBar = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const logOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  const toggleDropDown = () => {
    setIsDropDown(!isDropDown);
  };
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <LogoCorona />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        {currentUser === null ? (
          <Link className="nav-link" to="/sign-in">
            Sign in
          </Link>
        ) : (
          <span className="nav-link" onClick={logOut}>
            Log out
          </span>
        )}

        <CartIcon onClickIcon={toggleDropDown} />
      </div>
      {isDropDown === true && <CartDropDown />}{" "}
      {/*es como un if pero sin el else*/}
    </div>
  );
};
export default NavBar;
