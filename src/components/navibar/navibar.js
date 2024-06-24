import React from "react";
import "./navibar.scss";
import logo from "../../assets/img/LOGO.jpg";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import 'material-symbols'
import { MobileNav } from "./mobileNav/mobileNav";

export const Navibar = () => {
  const [activeLink, setActiveLink] = useState("");
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const smoothScrollTo = (element) => {
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth", // 平滑滚动
      });
    }
  };
  const handleScroller = (value) => {
    const element = document.querySelector(`#${value}`);
    onUpdateActiveLink(value);
    smoothScrollTo(element);
  };
  const [openMenu,setOpenMenu]=useState(false)
  const toggleMenu=()=>{
    setOpenMenu(!openMenu)
  }
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <div className="navibar">
      <div className="content">
        <img className="logo" src={logo} alt="logo"></img>

        <div className="navi-links">
          
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active-navi-item" : "navi-item"
              }
              onClick={(event) => {
                event.preventDefault(); // 阻止默认的链接行为
                handleScroller("home");
              }}
            >
              首页简介
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active-navi-item" : "navi-item"
              }
              onClick={(event) => {
                event.preventDefault(); // 阻止默认的链接行为
                handleScroller("skills");
              }}
            >
              专业技能
            </Nav.Link>
            <Nav.Link
              href="#work"
              className={
                activeLink === "work" ? "active-navi-item" : "navi-item"
              }
              onClick={(event) => {
                event.preventDefault(); // 阻止默认的链接行为
                handleScroller("work");
              }}
            >
              工作经历
            </Nav.Link>
            <Nav.Link
              href="#more"
              className={
                activeLink === "more" ? "active-navi-item" : "navi-item"
              }
              onClick={(event) => {
                event.preventDefault(); // 阻止默认的链接行为
                handleScroller("more");
              }}
            >
              更了解我
            </Nav.Link>
          </Nav>
          <Nav.Link href="#more">
            {" "}
            <button
              className="contack-btn"
              onClick={(event) => {
                event.preventDefault(); // 阻止默认的链接行为
                handleScroller("contack");
              }}
            >
              联系我
            </button>
          </Nav.Link>
        
        </div>
        <button className="menu-btn" onClick={()=>{toggleMenu()}}>
<span className="material-symbols-outlined" style={{fontSize:"1.8rem"}}>menu</span>
        </button>
      </div>
    </div>
    </>
  );
 
};
