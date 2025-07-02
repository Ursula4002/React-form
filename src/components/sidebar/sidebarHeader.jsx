// import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import {
//     Card,
//     CardContent,
//     CardHeader,
// } from "@/components/ui/card";


function SidebarHeader() {
    return (
        <div className="flex gap-6 justify-center">
            <div className="text-center">
                <div className="text-lg font-semibold">Following</div>
                <Badge variant="secondary" className="mt-1 cursor-pointer hover:text-green-500">248</Badge>
            </div>
            <div className="text-center">
                <div className="text-lg font-semibold">Followers</div>
                <Badge variant="secondary" className="mt-1 cursor-pointer hover:text-green-500">1.2K</Badge>
            </div>
        </div>
    );
}

export default SidebarHeader;