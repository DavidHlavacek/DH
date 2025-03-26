import React, { useState, useEffect } from "react";
import ServicesBar from "../ServicesBar";
import './index.scss'
import Main from "./Main";
import WebDev from "./WebDevelopment";
import SoftwareDevelopment from "./SoftwareDevelopment";
import Projects from "./Projects";
import { useNavigate, useLocation } from "react-router-dom";

// ... (imports remain unchanged)

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract tab from URL hash or default to "Main"
  const getTabFromPath = () => {
    // With BrowserRouter, the path is directly in location.pathname
    const path = location.pathname;
    
    if (path === "/services" || path === "/services/") return "Main";
    if (path.includes("/services/web-development")) return "Web Development";
    if (path.includes("/services/software-development")) return "Software Development";
    if (path.includes("/services/projects")) return "Projects";
    return "Main";
  };
  
  const [showPage, setShowPage] = useState(getTabFromPath());
  
  // Update the URL when showPage changes
  const updateShowPage = (page) => {
    setShowPage(page);
    
    // Update URL based on the selected tab
    switch(page) {
      case "Main":
        navigate("/services");
        break;
      case "Web Development":
        navigate("/services/web-development");
        break;
      case "Software Development":
        navigate("/services/software-development");
        break;
      case "Projects":
        navigate("/services/projects");
        break;
      default:
        navigate("/services");
    }
  };
  
  // Listen for URL changes (for browser back/forward buttons)
  useEffect(() => {
    const newPage = getTabFromPath();
    if (newPage !== showPage) {
      setShowPage(newPage);
    }
  }, [location.pathname]);

  return (
    <div className="services-page">
      <div id="services" className="flex h-max bg-[#1e1e1e]">
        <div className="bg-[#1e1e1e] lg:pl-72 h-full ">
          <div className="bg-[#424042] h-16 w-full fixed hidden lg:block">
            <ServicesBar
              showPage={showPage}
              setShowPage={updateShowPage}
            />
          </div>
          {showPage === "Main" ? (
            <div className="all-services">
              <Main id="Main" />
              {/* <Project1 id="Project1" /> */}
              {/* <Project2 id="Project2" />
                  <Project3 id="Project3" /> */}
            </div>
          ) : showPage === "Web Development" ? (
            <WebDev id="WebDevelopment" />
            ) : showPage==="Software Development" ? (
              <SoftwareDevelopment id="SoftwareDevelopment" />
            ) : showPage==="Projects" ? (
              <Projects id="Projects" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Services;

