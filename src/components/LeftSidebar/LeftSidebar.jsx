import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";


const LeftSidebar = () => {

  return (
    <div className="flex flex-col h-full md:h-[90vh] justify-between mr-6">
      <div className="mt-6 flex flex-col space-y-4">
        <Link to="/">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <HomeIcon fontSize="large" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/explore">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <TagIcon fontSize="large" />
            <p>Explore</p>
          </div>
        </Link>

        <Link to="/profile/">
          <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
            <PersonIcon fontSize="large" />
            <p>Profile</p>
          </div>
        </Link>

<div className="flex justify-between"> 
<div>
    <p className="font-bold">Username</p>
    <p className="font-bold">@Username</p>
</div>q
</div>
<div>
    <Link to="signup">
<button className="bg-red-500 px-4 py-2">Logout</button>
    </Link>
</div>
        </div>
        </div>

  )
}

export default LeftSidebar
