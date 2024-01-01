import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function Layout() {
    return (
        <div id="wrapper" className="container">
          <div className="row">
            <LeftSidebar />
            <Outlet />
            {/* <RightSidebar /> */}
          </div>
        </div>
    );
}

export default Layout;