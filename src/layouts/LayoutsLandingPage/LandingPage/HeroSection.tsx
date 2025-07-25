import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <>
      <div className="relative w-full">
        <section className="flex flex-col p-4 sm:p-8 md:p-16 lg:p-32">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl italic font-bold">
                Siap berkreasi bareng <br /> Sawcan ?
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-6 sm:mt-8">
            <p className="text-lg text-center text-gray-400 italic">
              Gabung Meta Lauch dan jadi salah satu creator pertama yang make
              Sawcan
            </p>
            <Button className="mt-4 py-6 sm:mt-6 px-5 sm:px-4 sm:py-6 rounded-xl font-bold text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-purple-600 text-sm sm:text-base">
              Gabung Metah Lauch
            </Button>
            <p className="text-xs sm:text-sm text-gray-400 mt-4 italic max-x-xs text-center">
              Gk ada spam, cuman update kalau bisa udah bisa akses data 🥰
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
