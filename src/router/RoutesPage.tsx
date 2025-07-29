import HeadingLandingPage from "@/layouts/LayoutsLandingPage/LandingPage/HeadingLandingPage";
import { Link, Outlet } from "react-router";

function RoutesPage() {
  return (
    <>
      <Link to={"/"}>
        <HeadingLandingPage />
      </Link>
      <Outlet />
    </>
  );
}

export default RoutesPage;
