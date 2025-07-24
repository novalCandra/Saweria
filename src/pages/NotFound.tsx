import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-8xl font-mono italic">404</h1>
        <p className="text-xl">Halaman Tidak Di temukan</p>

        <div className="mt-5">
          <Button>Kembali ke Halaman Utama</Button>
        </div>
      </div>
    </>
  );
}

export default NotFound;
