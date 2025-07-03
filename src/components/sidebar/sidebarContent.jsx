import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import {
//     Card,
//     CardContent,
//     CardHeader,
// } from "@/components/ui/card";

const suggestedUsers = [
    { name: "Alice Smith", handle: "@alice", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Bob Lee", handle: "@boblee", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Charlie Kim", handle: "@charliekim", avatar: "" },
    { name: "Saraï Kun", handle: "@Kunaï", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Emmanuel Kant", handle: "@Le_Kant", avatar: "" },
    { name: "Joe Gardner", handle: "@Joe", avatar: "https://randomuser.me/api/portraits/men/59.jpg" },
    { name: "Mike Wazowski", handle: "@Mike", avatar: "https://randomuser.me/api/portraits/men/53.jpg" },
    { name: "Dray Reymonds", handle: "@Dray", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Samuel", handle: "@Samy", avatar: "" },
    { name: "Clara Tanka", handle: "@Clara", avatar: "" },
    { name: "Souzy Schotwisti", handle: "@Zysti", avatar: "https://randomuser.me/api/portraits/women/0.jpg" },
];

function SidebarContent() {

    return (
        <div className="space-y-3">
            {suggestedUsers.map((user, idx) => (
                <div key={idx} className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{user.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.handle}</p>
                    </div>
                    <Button size="sm" variant="outline" className="bg-blue-950 text-white hover:text-green-500">Follow</Button>
                </div>
            ))}
        </div>
    )
}

export default SidebarContent