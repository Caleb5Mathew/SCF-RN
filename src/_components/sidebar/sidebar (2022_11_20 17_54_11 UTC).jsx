import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { FaHome } from "react-icons/fa"
import { FaMapMarkedAlt } from "react-icons/fa"
import { MdVolunteerActivism } from "react-icons/md"
import { IoIosPaper } from "react-icons/io"
import { MdSpeakerNotes } from "react-icons/md"
import './sidebar.scss';
import react from 'react'

const sidebarNavItems = [
    {
        display: 'Menu',
    },
    {
        display: 'Dashboard',
        icon: <FaHome />,
        to: '/',
        section: ''
    },
    
    {
        display: 'Our Mission',
        icon: <FaMapMarkedAlt/>,
        to: '/mission',
        section: 'mission'
    },
    {
        display: 'How to Help',
        icon: <MdVolunteerActivism/>,
        to: '/help',
        section: 'help'
    },
    {
        display: 'Register',
        icon: <IoIosPaper/>,
        to: '/register',
        section: 'register'
    },

]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  
    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <><div className='sidebar'>

       
            <div className="sidebar__logo">

            </div>
            



            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <div className='textreg'>
            Have Questions?
            contact us at scfoundation05@gmail.com
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                
                <ul className='nav-menu-items' onClick={showSidebar}>
                    
                    <li className='navbar-toggle' />

                    <div ref={sidebarRef} className="sidebar__menu">
                        <div
                            ref={indicatorRef}
                            className="sidebar__menu__indicator"
                            style={{
                                transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                            }}
                        ></div>

                        {sidebarNavItems.map((item, index) => (
                            <Link to={item.to} key={index}>
                                <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                    <div className="sidebar__menu__item__icon">
                                        {item.icon}
                                    </div>
                                    <div className="sidebar__menu__item__text">
                                        {item.display}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                </ul>
            </nav>

        </div>
        </>;
};

export default Sidebar;