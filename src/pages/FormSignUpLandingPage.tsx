import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import RadioFormSignup from "./RadioFormSignup";

function FormSignUpLandingPage() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-4">
        <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg border-2 sm:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="p-4 sm:p-8">
            <CardTitle className="font-medium text-2xl text-center italic cursor-pointer">
              SABCAN.IO
            </CardTitle>
            <CardDescription className="italic">SIGN UP</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full items-center gap-2">
              <label htmlFor="email">Email</label>
              <Input placeholder="email@pribadi.com" type="email" />
            </div>
            <div className="grid w-full items-center gap-2">
              <label htmlFor="NoTelp">NoTelp</label>
              <Input placeholder="+62" type="text" />
            </div>
            <div className="grid w-full items-center gap-2">
              <label htmlFor="password">Password</label>
              <Input type="password" placeholder="Masukan Password" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="bg-purple-600 w-full">Submits</Button>
            <div className="w-full">
              <RadioFormSignup />
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default FormSignUpLandingPage;
