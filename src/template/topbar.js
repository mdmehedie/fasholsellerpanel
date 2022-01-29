import React from 'react'
import TopSearchBox from '../component/topbar/topSearchBox'
import Notification from '../component/topbar/notification'
import Noticebar from '../component/topbar/noticebox';

const Topbar = () => {
    return (
        <header className="z-10 py-4 bg-white shadow-md dark:bg-slate-800">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-fuchsia-300">
                <TopSearchBox />
                <div className="flex items-center flex-shrink-0 space-x-6">
                    <Noticebar />
                    <Notification />
                </div>
            </div>
        </header>
        
    );
}

export default Topbar;