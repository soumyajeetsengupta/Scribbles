import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Navbar from "./Navbar";

function Layout() {
    return (
        <div id="wrapper" className="container">
          <div className="row">
            <Navbar />
            <LeftSidebar />
            <Outlet />
            {/* <RightSidebar /> */}
          </div>
        </div>
    );
}

export default Layout;