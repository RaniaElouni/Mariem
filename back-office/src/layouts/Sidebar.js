import React from "react";
import logo from "../assets/image/coficablogo.png";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { MdSettingsAccessibility } from "react-icons/md";
import { AiFillFolder } from "react-icons/ai";

const data = [
  { name: "Dashboard", path: "/",icon:<MdDashboard /> },
  { name: "Profile", path: "profile",icon:<CgProfile /> },
  { name: "Joboffre", path: "joboffre" ,icon:<AiFillFolder />},
  { name: "Interview", path: "interview",icon:<MdSettingsAccessibility /> },
  { name: "Internship offer", path: "internshipoffer",icon:<AiFillFolder /> },
  {name:"Condition",path:"condition",icon:<IoSettings />},
  {name:"Condidature",path:"condidature",icon:<FaUsers />}
];
export default function Sidebar({setToggle}) {
  return (
    <div  className="position-fixed bg-danger h-100  " style={{ width: 240,zIndex:4 }}>
      <div className="d-flex justify-content-around ">
      <img src={logo} alt="" width={100} />
      <button className="btn btn-light" onClick={()=>setToggle(false)}>x</button>
      </div>
      {data.map((element) => (
        <div>
          <Link className="nav-link p-3 d-flex gap-2 align-items-center  " to={element.path}>{element.icon}{element.name}</Link>
        </div>
      ))}
      
    </div>
  );
}
