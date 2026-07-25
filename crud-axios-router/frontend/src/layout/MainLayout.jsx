import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav className="navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">CRUD App</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/crudaxios">CrudAxios</Link></li>
            <li><Link to="/tablecategory">Category</Link></li>
          </ul>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default MainLayout;