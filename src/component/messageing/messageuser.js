import React from 'react'

const MessagerUser = ({messageuser}) => {
    if(messageuser.status === "seen")
    {
        return(
            <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                <div className="w-16 h-16 relative flex flex-shrink-0">
                    <img className="shadow-md rounded-full w-full h-full object-cover"
                        src={messageuser.picurl} alt=""
                    />
                </div>
                <div className="flex-auto min-w-0 ml-4 hidden md:block group-hover:block">
                    <p className="text-gray-300">{messageuser.name}</p>
                    <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                            <p>{messageuser.role}</p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap text-xs">{messageuser.time}</p>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div class="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                <div class="w-16 h-16 relative flex flex-shrink-0">
                    <img class="shadow-md rounded-full w-full h-full object-cover"
                        src={messageuser.picurl} alt=""
                    />
                    <div class="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                        <div class="bg-green-500 rounded-full w-3 h-3"></div>
                    </div>
                </div>
                <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                    <p class="font-bold">{messageuser.name}</p>
                    <div class="flex items-center text-sm">
                        <div class="min-w-0">
                            <p>{messageuser.role}</p>
                        </div>
                            <p class="ml-5 whitespace-no-wrap">{messageuser.time}</p>
                        </div>
                    </div>
                <div class="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"></div>
           </div>
        );
    }
}

export default MessagerUser;