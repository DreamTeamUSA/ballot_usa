import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
 
  return <header>
    <a id='logo' href='/'>React/Express Auth</a>
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>

        {
            <>
              <li><NavLink to='/users' end={true}>Users</NavLink></li>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/choose'>Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}
