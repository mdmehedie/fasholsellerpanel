import React, { useState} from 'react';
import {Link } from 'react-router-dom'
import * as mdIcons from 'react-icons/md'

const Notification = () => {
    const [isActive, setActive] = useState(false);

    return(
        <div className="relative">
            {!isActive ? (
                <button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple" onClick={() => setActive(!isActive)}>
                    <mdIcons.MdNotifications size="30px" />
                    {/* <span className="absulate top-0 right-0 inline-block w-3 h-3 transform translate-x-1 translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800 "></span> */}
                </button>
            ):
            (
                <button className="relative align-middle rounded-md focus:shadow-outline-purple" onClick={() => setActive(!isActive)}>
                    <mdIcons.MdNotifications size="30px"/>
                    {/* <span className="absulate top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800 "></span> */}
                </button>
            )}
            {isActive && (
                <ul className="absolute right-0 w-64 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700">
                    <li>
                        <span className="text-sm font-semibold pl-2 text-gray-600">admin</span>
                        <Link to="/notification" className="inline-flex items-center justify-between w-full px-2 pb-1 text-sm transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                            <span>This is a notification panel is the main load if the main purpose ....</span>
                        </Link>
                    </li>
                </ul>
            )}
            
        </div>
    );
}

export default Notification;