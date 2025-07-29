import RouterPageAdmin from "@/router/RouterPageAdmin";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

type userProfile = {
  id?: number;
  firstName: string;
  image: string;
  company: {
    title: string;
  };
};

function DetailsUserAdmin() {
  const [users, setUsers] = useState<userProfile[]>([]);

  const responsApi = async () => {
    try {
      const responApi = await axios.get("https://dummyjson.com/users");
      setUsers(responApi.data.users);
      console.log(responApi.data.users);
    } catch (error) {
      console.log("Data gagal", error);
    }
  };

  useEffect(() => {
    responsApi();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const userPage = 12;

  const IndexOfUser = currentPage * userPage;
  const IndexUserDikurangi = IndexOfUser - userPage;
  const currentUsers = users.slice(IndexUserDikurangi, IndexOfUser);

  const totalPage = Math.ceil(users.length / userPage);

  const HandleNextCard = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  };

  const HandlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="w- flex-shrink-0">
          <RouterPageAdmin />
        </div>

        <div className="flex flex-col p-5 mt-5">
          <h1 className="text-3xl font-bold italic">Details Users 📺</h1>
          <p className="text-gray-400 italic font-mono">
            Pengguna Streaming pada Sawcan
          </p>

          <div className="grid grid-cols-3 mt-2 gap-5 w-[900px]">
            {currentUsers.map((ctxUsers) => (
              <Card key={ctxUsers.id}>
                <CardHeader className="flex flex-1">
                  <img
                    src={ctxUsers.image}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-md font-bold italic">
                      {ctxUsers.firstName}
                    </h1>
                    <h1 className="text-md font-bold italic">
                      {ctxUsers.company.title}
                    </h1>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1/2 justify-center gap-2 -mt-4">
                  <Button className="w-20" variant={"custom"}>
                    Youtube
                  </Button>
                  <Button className="w-20 bg-blue-950" variant={"custom"}>
                    Tiktok
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <Button
              onClick={HandlePrevPage}
              disabled={currentPage === 1}
              variant={"custom"}
            >
              Back
            </Button>
            <span className="text-lg text-gray-700 pt-2">
              Page {currentPage} of {totalPage}
            </span>
            <Button
              onClick={HandleNextCard}
              disabled={currentPage === totalPage}
              variant={"custom"}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsUserAdmin;
