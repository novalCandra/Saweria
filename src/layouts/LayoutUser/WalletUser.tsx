import { Button } from "@/components/ui/button";
import RouterPageDSUser from "@/router/RouterPageDSUser";
function WalletUser() {
  return (
    <>
      <div className="flex h-full">
        <div className="w-64 flex-shrink-0">
          <RouterPageDSUser />
        </div>

        <div className="flex-1 p-5 mt-15">
          <h1 className="text-4xl font-bold italic">Wallet</h1>
          <p className="text-gray-500 italic">
            Sebelum Donasi ke Streammer alangkah baik nya Check isi Saldo
          </p>

          <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="flex text-4xl font-bold italic">Rp100.000</h1>
            <p className="text-xl text-gray-400 mt-2 italic">Sisa Saldo Kamu</p>

            <div className="flex flex-1/2 gap-5 px-2 mt-2">
              <Button variant={"custom"} className="font-bold italic">
                Top up
              </Button>
              <Button variant={"custom"} className="font-bold italic">
                Transfer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletUser;
