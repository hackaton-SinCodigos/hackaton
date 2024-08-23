import Sidebar from '../components/SideBar';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
