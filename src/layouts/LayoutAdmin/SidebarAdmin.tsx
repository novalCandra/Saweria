import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Users } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

function SidebarAdmin() {
  const [activemenu, setactiveMenu] = useState("dashboard");
  const menuItems = [
    {
      id: "dashboard",
      label: "Home",
      icon: Home,
      badge: null,
      to: "/dashboardAdminuser",
    },
    {
      id: "streamming",
      label: "Details User",
      icon: Users,
      badge: null,
      to: "/dahboardDetails",
    },
  ];
  const SidebarContent = () => (
    <div className="flex flex-col h-full p-1 bg-gray-800">
      <div className="p-5 border-b">
        <h2 className="text-2xl font-bold text-primary">Admin</h2>
        <p className="text-gray-500 italic font-bold">Admin@example.com</p>
      </div>

      <ScrollArea>
        <div className="space-y-2 py-3">
          {menuItems.map((items) => {
            const Icons = items.icon;
            return (
              <>
                <NavLink
                  key={items.id}
                  to={items.to}
                  className="block"
                  onClick={() => setactiveMenu(items.id)}
                >
                  <Button
                    key={items.id}
                    variant={activemenu === items.id ? "secondary" : "ghost"}
                    className="flex flex-1 justify-start cursor-pointer"
                    onClick={() => setactiveMenu(items.id)}
                  >
                    <Icons className="w-4 h-4" />
                    <span className="flex flex-1 text-lf">{items.label}</span>
                  </Button>
                </NavLink>
              </>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
  return (
    <>
      <div className="flex h-screen bg-background">
        <SidebarContent />
      </div>
    </>
  );
}

export default SidebarAdmin;
