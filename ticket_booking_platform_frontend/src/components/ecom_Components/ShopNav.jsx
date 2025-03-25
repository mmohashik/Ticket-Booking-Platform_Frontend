import { Link } from "react-router-dom";

const ShopNav = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <Link to="/" className="text-xl font-bold">BigIdea</Link>
      <ul className="flex space-x-4">
        <li><Link to="/shop/men" className="hover:text-blue-600">Men</Link></li>
        <li><Link to="/shop/women" className="hover:text-blue-600">Women</Link></li>
      </ul>
    </nav>
  );
};

export default ShopNav;
