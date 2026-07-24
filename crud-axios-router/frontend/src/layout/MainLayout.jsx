import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/crudaxios">CrudAxios</Link>
          </li>
          <li>
            <Link to="/tablecategory">Category</Link>
          </li>

        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default MainLayout;
