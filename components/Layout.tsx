import { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [navbarTitle, setNavbarTitle] = useState<string>("Overview");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen mt-[-1em]">
      {/* Navbar */}
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content container */}
      <div className="flex flex-grow flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} setNavbarTitle={setNavbarTitle} />

        {/* Main Content */}
        <main
          className={`p-5 transition-all duration-300 w-full ${isSidebarOpen ? "ml-64" : "ml-16"}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
