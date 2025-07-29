import SidebarAdmin from "@/layouts/LayoutAdmin/SidebarAdmin";
import React from "react";
import { Outlet } from "react-router";

function RouterPageAdmin() {
  return (
    <>
      <SidebarAdmin />
      <Outlet />
    </>
  );
}

export default RouterPageAdmin;
