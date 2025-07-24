import React from "react";
import JudulHeroMain from "./JudulHeroMain";

function HeroMain() {
  return (
    <>
      <div className="relative w-full">
        <section className="flex-col">
          <div className="mx-auto p-4">
            <div className="text-center">
              <div className="inline-flex items-center bg-purple-400 p-2 rounded-full text-white italic font-bold cursor-pointer">
                🤖 Meta Lauch- Jadi Pertama
              </div>
              <div className="mt-6">
                <JudulHeroMain />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroMain;
