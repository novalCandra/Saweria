import JudulHeroMain from "./JudulHeroMain";
import { Button } from "@/components/ui/button";

function HeroMain() {
  return (
    <>
      <div className="relative w-full">
        <section className="flex-col">
          <div className="mx-auto p-4 sm:p-6 md:p-10 lg:p-14">
            <div className="text-center">
              <div className="inline-flex items-center bg-purple-400 p-2 rounded-full text-white italic font-bold cursor-pointer">
                🤖 Meta Lauch- Jadi Pertama
              </div>
              <div className="mt-4 sm:mt-6">
                <JudulHeroMain />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center sm:gap-5 mt-4 sm:mt-5">
                <Button className="p-2 sm:p-5 md:p-6 lg:p-7 rounded-xl bg-purple-600 text-white font-bold hover:bg-gray-500 hover:text-white transistion ease-in-out duration-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  Gabung Meta Lauch
                </Button>
                <Button className="p-2 sm:p-5 md:p-6 lg:p-7 rounded-xl bg-purple-600 text-white font-bold hover:bg-gray-500 hover:text-white transistion ease-in-out duration-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  Lihat Cara Kerja
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroMain;
