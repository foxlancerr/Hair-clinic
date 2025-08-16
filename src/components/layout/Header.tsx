import { RiMenu3Fill } from "react-icons/ri";

function Header() {

  return (

    <nav className="relative header-container bg-green-300">
      <div className="container flex mx-auto justify-between items-center py-3 px-6">
        <img src="./assets/images/logo.svg" alt="main-logo" className="nav-logo" />
        <span className="nav-menu">
          <RiMenu3Fill size={24}></RiMenu3Fill>
        </span>
      </div>
    </nav>
  );
}

export default Header;
