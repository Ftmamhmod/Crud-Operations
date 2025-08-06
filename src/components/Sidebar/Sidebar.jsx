import { AiOutlineProfile } from "react-icons/ai";
import { IoBookmarkOutline, IoHomeOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import userImg from "./../../assets/images/pexels-photo-2379004 1.png";

export const SideBar = () => {

const Name= localStorage.getItem("userEmail")


  return (
    <Sidebar className="h-screen w-[250px] fixed left-0 top-0 shadow-lg bg-white">
      <h4 className="text-gray-800 pt-2 pb-5">
        <span className="text-yellow-500 p-2">
          <b>|</b>
        </span>
        <b> CRUD OPERATIONS</b>
      </h4>
      <div className="flex flex-col items-center">
        <img
          src={userImg}
          alt="logo"
          className="w-24 h-24 rounded-full object-cover"
        />
        {/* <h6 className="p-2">{Name}</h6> */}
        <p className="text-yellow-500 pt-3">{Name}</p>
      </div>
      <Menu className="flex flex-col justify-center h-auto items-center mt-6" style={{ lineHeight: '2' }}>
        <MenuItem
          icon={<IoHomeOutline className="text-lg" />}
          component={<Link to="/dashboard/home" />}
          className="hover:bg-gray-100 w-full  px-4 rounded "
        >
          Home
        </MenuItem>
        <MenuItem
          icon={<IoBookmarkOutline className="text-lg" />}
          component={<Link to="/dashboard/Students" />}
          className="hover:bg-gray-100 w-full  px-4 rounded"
        >
          Students
        </MenuItem>
        <MenuItem
          icon={<PiGraduationCap className="text-lg" />}
          component={<Link to="/dashboard/user-form" />}
          className="hover:bg-gray-100 w-full  px-4 rounded"
        >
          Add User
        </MenuItem>
        <MenuItem
          icon={<AiOutlineProfile className="text-lg" />}
          component={<Link to="/dashboard/profile" />}
          className="hover:bg-gray-100 w-full  px-4 rounded"
        >
          Profile
        </MenuItem>
        <hr className="w-full my-2 border-gray-200" />
        <MenuItem
          icon={<RiLogoutBoxRLine className="text-lg" />}
          component={<Link to="/login" />}
          className="hover:bg-gray-100 w-full  px-4 rounded"
        >
          Logout
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
