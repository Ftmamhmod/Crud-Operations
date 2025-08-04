import { Outlet } from "react-router-dom";
import { SideBar } from "../../components/Sidebar/Sidebar";
import { NavBar } from "../navBar/Navbar";

const MasterLayout = () => {
  return (
    <div className="flex">
      <div className="">
        <SideBar />
      </div>
      <div className="w-full">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MasterLayout;
