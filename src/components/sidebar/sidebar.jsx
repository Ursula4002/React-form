import SidebarHeader from "./sidebarHeader";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import SidebarContent from "./sidebarContent";

function Sidebar() {
  return (
    <div className="sidebar h-full flex flex-col">
      <Card className="h-full w-full flex flex-col max-w-[400px] min-w-[220px]">
        <CardHeader className="pb-4">
          <SidebarHeader />
        </CardHeader>
        <Separator className="my-2" />
        <CardContent className="pt-2 flex-1 min-h-0 h-0 overflow-y-auto scrollbar-none">
          <SidebarContent />
        </CardContent>
      </Card>
    </div>
  );
}

export default Sidebar;
