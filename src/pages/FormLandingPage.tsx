import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function FormLandingPage() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-4">
        <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg border-2 sm:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="font-bold text-2xl sm:text-3xl text-center uppercase cursor-pointers">
              SABCAN.IO
            </CardTitle>
            <CardDescription className=" text-lg sm:text-xl font-semibold italic">
              LOGIN
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full items-center gap-2">
              <label htmlFor="email">Email</label>
              <Input placeholder="email@pribadi.com" type="email" />
            </div>
            <div className="grid w-full items-center gap-2">
              <label htmlFor="password">Password</label>
              <Input type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-1/2 justify-end gap-10">
              <p className="text-xs sm:text-sm text-gray-700 italic cursor-pointer hover:text-red-400 transition ease-in-out duration-200">
                Sign up
              </p>
              <Button variant="custom">Login</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default FormLandingPage;
