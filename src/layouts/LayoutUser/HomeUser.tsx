import RouterPageDSUser from "@/router/RouterPageDSUser";

function HomeUser() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-64 flex-shrink-0">
          <RouterPageDSUser />
        </div>

        <div className="flex-1 p-5 mt-5">
          <h1 className="text-3xl font-mono italic">Halo Sabcans👋</h1>
          <p className="text-gray-500 italic font-md">Welcome To Sawcan</p>
        </div>
      </div>
    </>
  );
}

export default HomeUser;
