import { Route, Routes } from "react-router";
import FormLandingPage from "./pages/FormLandingPage";
import FormSignUpLandingPage from "./pages/FormSignUpLandingPage";
import NotFound from "./pages/NotFound";
import LandingPage from "./layouts/LayoutsLandingPage/LandingPage/LandingPage";
import { ThemeProvider } from "./components/ui/theme-provider";
import UserPofile from "./layouts/LayoutUser/UserPofile";
import Steramming from "./layouts/LayoutUser/Steramming";
import HomeUser from "./layouts/LayoutUser/HomeUser";
import WalletUser from "./layouts/LayoutUser/WalletUser";
import HomeAdmin from "./layouts/LayoutAdmin/HomeAdmin";
import DetailsUserAdmin from "./layouts/LayoutAdmin/DetailsUserAdmin";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<FormLandingPage />} />
          <Route path="/signup" element={<FormSignUpLandingPage />} />
          <Route path="/dashboardUser" element={<HomeUser />} />
          <Route path="/tip" element={<UserPofile />} />
          <Route path="/stermming" element={<Steramming />} />
          <Route path="/wallet" element={<WalletUser />} />
          <Route path="/dashboardAdminuser" element={<HomeAdmin />} />
          <Route path="/dahboardDetails" element={<DetailsUserAdmin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
