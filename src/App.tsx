import { Route, Routes } from "react-router";
import FormLandingPage from "./pages/FormLandingPage";
import FormSignUpLandingPage from "./pages/FormSignUpLandingPage";
import NotFound from "./pages/NotFound";
import LandingPage from "./layouts/LayoutsLandingPage/LandingPage/LandingPage";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<FormLandingPage />} />
          <Route path="/signup" element={<FormSignUpLandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
