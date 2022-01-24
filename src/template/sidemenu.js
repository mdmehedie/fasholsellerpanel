import React from 'react';
import SidebarLink from './sidebarLink'

const sidemenu = ({menus}) => {
    return(
        <div className="mt-6">
            <div className="relative px-6 py-3">
                {menus.map(menu => (
                    <SidebarLink menu={menu} />
                ))}
            </div>
        </div>
    );
}

export default sidemenu;