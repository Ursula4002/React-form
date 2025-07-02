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
    <div className="sidebar flex w-2/4 h-screen overflow-hidden">
      <Card>
        <CardHeader className="pb-4">
          <SidebarHeader />
        </CardHeader>
        <Separator className="my-2" />
        <CardContent className="pt-2">
          <SidebarContent />
        </CardContent>
      </Card>
    </div>
  );
}

export default Sidebar;
