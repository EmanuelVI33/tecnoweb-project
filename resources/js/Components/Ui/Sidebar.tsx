import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/ui/tabs"

function Sidebar() {
    return (
        <aside className="flex">
            <Tabs defaultValue="account" className="w-1/4 bg-slate-300 rounded-xl m-2" color="">
                <TabsList className="">
                    <TabsTrigger value="account" className="">Presentador</TabsTrigger>
                    <TabsTrigger value="password">Video</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent>
            </Tabs>
            {/* <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700">
                <a href="#">
                    <img className="w-auto h-6" src="https://merakiui.com/images/logo.svg" alt="" />
                </a>

                <a href="#" className="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </a>

                <a href="#" className="p-1.5 text-blue-500 transition-colors duration-200 bg-blue-100 rounded-lg dark:text-blue-400 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                </a>
            </div>

            <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-96 w-80 dark:bg-gray-900 dark:border-gray-700">
                <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">Accounts</h2>

                <div className="mt-8 space-y-4">
                    <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt="" />
                    
                        <div className="text-left rtl:text-right">
                            <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">Mia John</h1>
            
                            <p className="text-xs text-gray-500 dark:text-gray-400">11.2 Followers</p>
                        </div>
                    </button>

                    <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80" alt="" />
                    
                        <div className="text-left rtl:text-right">
                            <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">arthur melo</h1>
            
                            <p className="text-xs text-gray-500 dark:text-gray-400">1.2 Followers</p>
                        </div>
                    </button>
                </div>
            </div> */}
        </aside>
    )
}

export default Sidebar
