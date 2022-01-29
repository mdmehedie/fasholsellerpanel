import React from 'react'
import Messageuser from '../../component/messageing/messageuser'
import Messagebox from '../../component/messageing/messagebox'

const Messaging = () => {

    const messageuserlist = [
        {
            status: "seen",
            name: "Angelina Jolie",
            picurl: "https://randomuser.me/api/portraits/women/61.jpg",
            role: "Admin",
            time: "10m"
        },
        {
            status: "unseen",
            name: "Abir Hasan",
            picurl: "https://randomuser.me/api/portraits/men/97.jpg",
            role: "Manager",
            time: "10m"
        },
    ]

    return (
        <div className="h-screen w-full flex antialiased text-gray-600 overflow-hidden dark:text-gray-200">
            <div className="flex-1 flex flex-col">
                <main className="flex-grow flex flex-row min-h-0">
                    <section className="flex flex-col p-3 flex-none overflow-auto w-16 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out border-r-[.01px] border-gray-400 dark:border-gray-800">
                        <div className="header p-4 flex flex-row justify-center items-center flex-none border-b-[.01px] border-gray-400 dark:border-gray-800">
                            <p className="text-md font-bold hidden md:block group-hover:block">Fashol Help Desk</p>
                        </div>
                        <div className="contacts p-2 flex-1 space-y-3">
                            {messageuserlist.map((messageruser) => (
                                <Messageuser messageuser = {messageruser} />
                            ))}
                        </div>
                    </section>
                    
                    <section className="flex flex-col flex-auto brder-1 border-gray-800">
                        <Messagebox />
                    </section>
                </main>
            </div>
        </div>
    );
}


export default Messaging;