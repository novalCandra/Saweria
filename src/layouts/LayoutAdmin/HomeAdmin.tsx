import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import RouterPageAdmin from "@/router/RouterPageAdmin";

function HomeAdmin() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-64 flex">
          <RouterPageAdmin />
        </div>

        <div className="flex-1 p-5 mt-5">
          <div className="text-3xl font-bold">Hello Admins👋</div>
          <div className="grid grid-cols-3 gap-5 mt-2 rounded-none">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-bold text-xl italic">
                  10 Users
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-bold text-xl italic">
                  10 Users
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-bold text-xl italic">
                  10 Users
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAdmin;
