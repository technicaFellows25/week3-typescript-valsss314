import { Link } from "react-router";
// Please see the following for MUCH better examples:
// https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/navbars
// Note that by default bullets don't appear in lists w/tailwindcss
const Navbar = () => {
  return (
    <nav className="bg-gray-800 h-15 mb-25 w-screen flex px-4 justify-between items-center">
      <Link to="/" className="text-sky-600 hover:text-gray-100 text-xl no-underline">
        Home
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link to="/aboutus" className="text-sky-600 hover:text-gray-100 text-xl no-underline">About Us</Link>
        </li>
        <li>
          <Link to="/weeks" className="text-sky-600 hover:text-gray-100 text-xl no-underline">Weeks</Link>
        </li>
        <li>
          <Link to="/contactus" className="text-sky-600 hover:text-gray-100 text-xl no-underline">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
