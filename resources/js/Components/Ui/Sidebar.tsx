import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/ui/tabs";

function Sidebar() {
    return (
        <aside className="flex">
            <Tabs
                defaultValue="account"
                className="w-1/4 bg-slate-300 rounded-xl m-2"
                color=""
            >
                <TabsList className="">
                    <TabsTrigger value="account" className="">
                        Presentador
                    </TabsTrigger>
                    <TabsTrigger value="password">Video</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent>
            </Tabs>
        </aside>
    );
}

export default Sidebar;
