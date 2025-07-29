import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import logoUsers from "@/assets/sabcan.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FooterLandingPage from "../LayoutsLandingPage/LandingPage/FooterLandingPage";
import RoutesPage from "@/router/RoutesPage";

function UserPofile() {
  return (
    <>
      <RoutesPage />
      <div className="w-full max-w-4xl mx-auto">
        <Card className="bg-slate-800 border-slate-700 overflow-hidden">
          {/* Header Banners */}
          <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-8 w-12 h-12 bg-slate-400 rounded-lg rotate-12"></div>
              <div className="absolute top-8 right-16 w-8 h-8 bg-slate-400 rounded-full"></div>
              <div className="absolute top-16 left-24 w-6 h-6 bg-slate-400 rounded"></div>
              <div className="absolute top-20 right-32 w-10 h-10 bg-slate-400 rounded-lg rotate-45"></div>
              <div className="absolute top-32 left-16 w-8 h-8 bg-slate-400 rounded-full"></div>
              <div className="absolute top-24 right-8 w-6 h-6 bg-slate-400 rounded rotate-12"></div>
              <div className="absolute top-12 left-24 w-4 h-4 bg-slate-400 rounded rotate-12"></div>
              <div className="absolute top-36 right-24 w-8 h-8 bg-slate-400 rounded-lg"></div>
              <div className="absolute top-6 right-48 w-6 h-6 bg-slate-400 rounded rotate-45"></div>
              <div className="absolute top-28 left-64 w-5 h-5  bg-slate-400 rounded-full"></div>
              <div className="absolute top-40 right-40 w-7 h-7 bg-slate-400 rounded-lg rotate-12"></div>
              <div className="absolute top-14 left-72 w-4 h-4 bg-slate-400 rounded"></div>
            </div>
          </div>

          <CardContent className="pt-11">
            <div className="flex items-start gap-4 -mt-16 relative z-10">
              <Avatar className="w-24 h-24 border-2 border-purple-600 shadow-lg">
                <AvatarImage src={logoUsers} className="object-cover" />

                <AvatarFallback className="bg-slate font-bold text-slate-200 text-xl">
                  SB
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 mt-5">
                <h1 className="text-white font-bold mb-2">SABCAN CANDRA</h1>
                <p className="text-slate-400 text-md ">
                  Students Junior Sofware Engginer
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="h-10 mt-16">
          <div className="flex px-2 mb-2">
            <p className="text-md text-purple-600 cursor-pointer">Tip</p>
          </div>
          <Card className="bg-slate-800 border-gray-700 px-6">
            <h1 className="text-2xl font-bold text-purple-400 italic">
              Donasi Tip
            </h1>
            <CardContent>
              <label htmlFor="Donasi" className="text-md font-bold">
                Mau Kasih berapa ?{" "}
              </label>
              <div className="relative">
                <span className="absolute left-1 top-4 -translate-y-1/2 text-gray-500 px-2">
                  RP.
                </span>
                <Input className="pl-10 mt-2" placeholder="5.000" />
                <p className="text-md text-gray-500">
                  Minimun : <span className="text-purple-500">Rp.5.000</span>
                </p>
              </div>
              <div className="relative mt-2">
                <label htmlFor="email" className="text-md font-bold">
                  Email
                </label>
                <Input className="mt-2" placeholder="example@gmai.com" />
                <p className="text-sm text-gray-400 mt-2">
                  Email bakal dipake untuk kirim bukti transaksi ke kamu.
                  Balasan dari kreator juga bakal dikirim ke email ini.
                </p>
              </div>
              <div className="relative mt-2">
                <label htmlFor="nama" className="text-md font-bold">
                  Name
                </label>
                <Input className="mt-2" placeholder="Siapa Nama Kamu~" />
              </div>
              <div className="relative mt-2">
                <label htmlFor="nama" className="text-md font-bold">
                  Pesan (Opsional)
                </label>
                <Textarea
                  className="mt-2"
                  placeholder="Mau Bilang apa sama Kreator Favorit mu"
                ></Textarea>
                <p className="text-sm text-gray-400 mt-2">
                  Maks 500 karakter ya! (0/500)
                </p>
                <Button className="w-full mt-2 font-bold" variant={"custom"}>
                  Kirim Pesan 🚀
                </Button>
              </div>
            </CardContent>
          </Card>
          <FooterLandingPage />
        </div>
      </div>
    </>
  );
}

export default UserPofile;
