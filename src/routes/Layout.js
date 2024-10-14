import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar'; 

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
