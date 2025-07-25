import { NavLink } from "react-router";
import ButtonLandingPage from "../buttonLandingPage/ButtonLandingPage";
import { Button } from "@/components/ui/button";

function HeadingLandingPage() {
  return (
    <>
      <header className="mb-4 mt-2 p-4">
        <div className="mx-auto flex h-full max-w-screen-lg items-center justify-between">
          <h1 className="text-xl italic font-mono">SAWCAN.IO</h1>
          <div className="flex justify-end gap-5">
            <ButtonLandingPage />
            <Button className="bg-purple-600 text-white py-">
              <NavLink to={"/login"}>Masuk</NavLink>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeadingLandingPage;
