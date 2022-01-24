import React, { useState} from 'react';
import {Link} from 'react-router-dom';
const SidebarLink = ({menu}) => {
    const [show, setShow] = useState(false);
    if(!menu.submenu){
        return(
            <Link className="inline-flex py-3 items-center w-full text-base font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to={menu.link}>
                {menu.icon}
                <span className="ml-4">{menu.menu}</span>
            </Link>
        );
    }
    return (
        
        <>
            {show ?
                    (
                        <button className="inline-flex py-3 items-center justify-between w-full text-base font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" onClick={() => setShow(!show)}>
                            <span className="inline-flex items-center">
                                {menu.icon}
                                <span className="ml-4">{menu.menu}</span>
                            </span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" >
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" ></path>
                            </svg>
                        </button>

                    ):
                    (
                        <button className="inline-flex py-2  items-center justify-between w-full text-base font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" onClick={() => setShow(!show)}>
                            <span className="inline-flex items-center">
                                {menu.icon}
                                <span className="ml-4">{menu.menu}</span>
                            </span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" >
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" ></path>
                            </svg>
                        </button>
                    )
                }
            {show && (
                <>
                    <div className="p-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-200 dark:text-gray-400 dark:bg-gray-900" onClick={() => setShow(!show)}>
                        <div className="px-2 py-1 transition-colors duration-150">
                            {menu.submenu.map((subMenu) => (
                                <Link className="w-full hover:text-gray-800 dark:hover:text-gray-200" to={subMenu.link}>
                                    <div className="py-2">
                                        {subMenu.page }
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
            
        </>
    );
}

export default SidebarLink;