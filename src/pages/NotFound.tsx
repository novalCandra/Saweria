import { Button } from "@/components/ui/button";
import LogoNotFound from "@/assets/penguins.png";

function NotFound() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <img src={LogoNotFound} className="w-1/2 h-1/2 sm:w-1/5 sm:h-1/5" />
        <div className="flex flex-col mb-15">
          <h1 className="text-8xl font-mono italic text-center">404</h1>
          <p className="text-xl">Halaman Tidak Di temukan</p>
        </div>
        <div className="mt-5 text-center">
          <Button className="px-10 py-5" variant={"custom"}>
            Kembali ke Halaman Utama
          </Button>
        </div>
      </div>
    </>
  );
}

export default NotFound;
