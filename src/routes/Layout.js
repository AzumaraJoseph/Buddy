// Layout.js
import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar'; // Make sure to adjust the path if needed

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
