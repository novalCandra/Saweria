import DashboardUser from "@/layouts/LayoutUser/DashboardUser";
import { Outlet } from "react-router";

function RouterPageDSUser() {
  return (
    <>
      <DashboardUser />
      <Outlet />
    </>
  );
}

export default RouterPageDSUser;
