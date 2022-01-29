import React from 'react'
import * as aiIcons from 'react-icons/ai'


const TopSearchBox = () => {
    return(
        <div className="flex justify-center flex-1 lg:mr-32">
            <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                <div className="absolute inset-y-0 flex items-center pl-3">
                    <aiIcons.AiOutlineSearch />
                </div>
                <input className="w-full pl-8 pr-2 py-3 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-700 focus:bg-white focus:text-gray-800 focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for product or customer" aria-label="Search" />
            </div>
        </div>
        
    );
}

export default TopSearchBox;