import { Route, Routes } from "react-router";
import FormLandingPage from "./pages/FormLandingPage";
import FormSignUpLandingPage from "./pages/FormSignUpLandingPage";
import NotFound from "./pages/NotFound";
import LandingPage from "./layouts/LayoutsLandingPage/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<FormLandingPage />} />
        <Route path="/signup" element={<FormSignUpLandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
