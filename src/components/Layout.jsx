import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="layout">
      <h1>Classroom Programmer</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
