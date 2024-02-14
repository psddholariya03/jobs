import { Outlet } from "react-router-dom";

import Wrapper from "../assets/wrappers/Dashboard";
import { Navbar, BigSidebar, SmallSidebar } from "../components";
import { useState,createContext,useContext } from "react";

const Dashboardcontext=createContext();
const Dashboard = () => {

    const user = {name:'john'};

    const[showSidebar,setShowSidebar]=useState(false);
    const[isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleDarkTheme=()=>{
        console.log('toggle dark theme');
    }
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Dashboard;
