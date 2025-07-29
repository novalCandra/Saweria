import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RouterPageDSUser from "@/router/RouterPageDSUser";
import LogoYoutuber from "@/assets/sabcan.jpg";
import { Button } from "@/components/ui/button";

function Steramming() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-64 flex-shrink-0">
          <RouterPageDSUser />
        </div>

        <div className="flex-1 flex-col p-5 mt-5">
          <h1 className="text-3xl font-mono italic">Steramming</h1>
          <p className="text-gray-400 italic text-md">
            Jadwals Streamming Live Sekarang
          </p>

          <div className="grid grid-cols-3 text-center mt-12 gap-3 px-6 rounded-md">
            <Card>
              <CardHeader className="flex flex-1/2">
                <img
                  src={LogoYoutuber}
                  className="w-1/5 rounded-full border-b border-2 border-purple-600"
                />
                <div className="flex flex-col px-1 text-left">
                  <p className="text-md italic font-bold">Noval</p>
                  <p className="text-md italic font-bold">Sofware Engginer</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1/2 justify-center gap-2 -mt-5">
                <Button variant={"custom"} className="w-20">
                  Youtuber
                </Button>
                <Button className="w-20 bg-slate-700" variant={"custom"}>
                  Tiktok
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-1/2">
                <img
                  src={LogoYoutuber}
                  className="w-1/5 rounded-full border-b border-2 border-purple-600"
                />
                <div className="flex flex-col px-1 text-left">
                  <p className="text-md italic font-bold">Noval</p>
                  <p className="text-md italic font-bold">Sofware Engginer</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1/2 justify-center gap-2 -mt-5">
                <Button variant={"custom"} className="w-20">
                  Youtuber
                </Button>
                <Button className="w-20 bg-slate-700" variant={"custom"}>
                  Tiktok
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-1/2">
                <img
                  src={LogoYoutuber}
                  className="w-1/5 rounded-full border-b border-2 border-purple-600"
                />
                <div className="flex flex-col px-1 text-left">
                  <p className="text-md italic font-bold">Noval</p>
                  <p className="text-md italic font-bold">Sofware Engginer</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1/2 justify-center gap-2 -mt-5">
                <Button variant={"custom"} className="w-20">
                  Youtuber
                </Button>
                <Button className="w-20 bg-slate-700" variant={"custom"}>
                  Tiktok
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex"></div>
      </div>
    </>
  );
}

export default Steramming;
