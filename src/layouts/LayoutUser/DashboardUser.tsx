import { useState } from "react";
import { Home, Youtube, Wallet, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import LogoUser from "@/assets/sabcan.jpg";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
// import { Sheet, SheetTrigger } from "@/components/ui/sheet";

function DashboardUser() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    {
      id: "dashboard",
      label: "Home",
      icon: Home,
      badge: null,
      to: "/dashboardUser",
    },
    {
      id: "streamming",
      label: "Streamming",
      icon: Youtube,
      badge: null,
      to: "/stermming",
    },
    {
      id: "wallet",
      label: "Wallet",
      icon: Wallet,
      badge: null,
      to: "/wallet",
    },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full p-1 bg-[#11152d]">
      {/* Logo Icons */}
      <div className="p-5 border-b">
        <h2 className="text-2xl font-bold text-primary">SAWCAN</h2>
        <p className="text-sm text-muted-foreground">user</p>
      </div>
      {/* Profile Users */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <Avatar className="w-1/3 h-1/3">
            <AvatarImage src={LogoUser} />
          </Avatar>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Sabcans</p>
          <p className="text-xs text-muted-foreground">sabcan@example.com</p>
        </div>
      </div>
      {/* Navigation Menu */}
      <ScrollArea>
        <div className="space-y-2 py-3">
          {menuItems.map((itemIcon) => {
            const Icon = itemIcon.icon;
            return (
              <>
                <NavLink key={itemIcon.id} to={itemIcon.to}>
                  <Button
                    key={itemIcon.id}
                    variant={activeMenu === itemIcon.id ? "secondary" : "ghost"}
                    className="flex flex-1 justify-start cursor-pointer"
                    onClick={() => setActiveMenu(itemIcon.id)}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="flex flex-1 text-left">
                      {itemIcon.label}
                    </span>
                    {itemIcon.badge && (
                      <Badge
                        variant={
                          itemIcon.badge === "New" ? "default" : "secondary"
                        }
                        className="ml-auto"
                      >
                        {itemIcon.badge}
                      </Badge>
                    )}
                  </Button>
                </NavLink>
              </>
            );
          })}
        </div>

        <Separator className="my-4" />

        {/* Logouts */}
        <div className="pb-4">
          <Button
            variant={"ghost"}
            className="w-full justify-start h-12 text-purple-600 hover:text-purple-700"
          >
            <LogOut className="mt-1 w-4 h-4" /> Logout
          </Button>
        </div>
      </ScrollArea>
    </div>
  );

  return (
    <>
      <div className="flex h-screen bg-background">
        <aside className="hidden lg:flex lg:w-80 lg:flex-col border-r bg-card">
          <SidebarContent />
        </aside>
      </div>
    </>
  );
}
export default DashboardUser;
