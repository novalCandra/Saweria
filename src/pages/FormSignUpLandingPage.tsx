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
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-96 rounde-xl">
          <CardHeader>
            <CardTitle className="font-medium text-2xl text-center italic cursor-pointer">
              SABCAN.IO
            </CardTitle>
            <CardDescription className="italic">SIGN UP</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full max-w-sm items-center gap-3">
              <label htmlFor="email">Email</label>
              <Input placeholder="email@pribadi.com" type="email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <label htmlFor="NoTelp">NoTelp</label>
              <Input placeholder="+62" type="text" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <label htmlFor="password">Password</label>
              <Input type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-purple-600 w-full">Submits</Button>
          </CardFooter>
          <div className="flex px-5">
            <RadioFormSignup />
          </div>
        </Card>
      </div>
    </>
  );
}

export default FormSignUpLandingPage;
