import CTXMain from "./CTXMain";
import FooterLandingPage from "./FooterLandingPage";
import HeadingLandingPage from "./HeadingLandingPage";
import HeroMain from "./HeroMain";
import HeroSection from "./HeroSection";

function LandingPage() {
  return (
    <>
      <header className="flex flex-col w-full h-full">
        <HeadingLandingPage />
      </header>
      <main className="flex flex-col mt-10">
        <HeroMain />
        <CTXMain />
        <HeroSection />
      </main>
      <footer>
        <FooterLandingPage />
      </footer>
    </>
  );
}

export default LandingPage;
