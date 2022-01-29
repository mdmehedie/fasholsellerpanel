import React from 'react';
import Sidemenu from '../component/sidebar/sidemenu'
import * as faIcons from 'react-icons/fa'
import * as tiIcons from 'react-icons/ti'
import * as imIcons from 'react-icons/im'
import * as fiIcons from 'react-icons/fi'

const sidebar = () =>{
    const menus = [
        {  menu: "Dashboard",  link: "/", icon: <faIcons.FaHome /> },
        {  menu: "Profile",  link: "/", icon: <fiIcons.FiUser /> },
        { 
            menu: "Order",
            submenu: [
                {page: "Add Order", link: "/addorder.html"},
                { page: "All Order ", link: "/allorder.html"},
            ],
            icon: <imIcons.ImCart />
        },
        {  menu: "Message",  link: "/message.html", icon: <tiIcons.TiMessages /> },
        { 
            menu: "Customer",
            submenu: [
                {page: "Add Customer", link: "/addorder.html"},
                { page: "All Customer", link: "/allorder.html"},
            ],
            icon: <fiIcons.FiUsers />
        },

    ];

    return(
        <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <div className="py-4 text-gray-500 dark:text-gray-400">
                <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="https://fashol.com">Fashol.com</a>
                <Sidemenu menus={menus} />
            </div>
        </aside>
        
    );
}

export default sidebar;