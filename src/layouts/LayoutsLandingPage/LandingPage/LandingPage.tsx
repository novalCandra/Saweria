import HeadingLandingPage from "./HeadingLandingPage";
import HeroMain from "./HeroMain";

function LandingPage() {
  return (
    <>
      <header className="flex flex-col w-full h-full">
        <HeadingLandingPage />
      </header>
      <main className="flex flex-col">
        <HeroMain />
      </main>
    </>
  );
}

export default LandingPage;
