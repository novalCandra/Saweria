import { Star, Gift, Heart, Zap } from "lucide-react";

function CTXMain() {
  return (
    <>
      <div className="relative w-full">
        <main className="flex-col bg-[#11151d] p-4 sm:p-8 md:p-15 lg:p-32">
          <div className="mx-auto">
            <div className="flex justify-center gap-1 mb-4">
              <Star className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-white text-sm sm:text-base">Cara Kerja nya</p>
            </div>
            <div className="mt-2 mb-6 sm:mb-10">
              <h1 className="text-xl sm:text-2xl text-center italic font-mono text-white">
                Tiga langkah, langsung cuan
              </h1>
              <p className="text-center text-sn sm:text-base md:text-xl text-xl italic text-gray-500 mt-2">
                Setup simple banget, - Dalam Hitungan Menit udah bisa mulai
                menerima tips
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-3 max-w-4xl mx-auto gap-6 sm:gap-8">
              {/* MENU CARD 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-600 rounded-2xl p-6 mb-4">
                  <Gift className="w-5 h-5 sm:w-6 md:h-6 text-white" />
                </div>
                <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center mb-3">
                  <span className="text-white  font-bold">1</span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  Setup tip jar Kamu
                </h3>
                <p className="text-gray-400 text-sm">
                  Aktifin tips di Sawcan creator kamu. Cukup 30 detik, tanpa
                  biaya tersembunya!
                </p>
              </div>
              {/* MENU CARD 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-600 rounded-2xl p-6 mb-4">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center mb-3">
                  <span className="text-white  font-bold">2</span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  Share ke audience kamu
                </h3>
                <p className="text-gray-400 text-sm">
                  Taro link Kreate kamu di sosmed kamu.
                </p>
              </div>
              {/* Menu Card 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-600 rounded-2xl p-6 mb-4">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center mb-3">
                  <span className="text-white  font-bold">3</span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  Langsung dapat cuan
                </h3>
                <p className="text-gray-400 text-sm">
                  Tips masuk ke akun kamu instant.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CTXMain;
