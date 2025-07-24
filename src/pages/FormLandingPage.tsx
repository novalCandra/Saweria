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
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-96 rounde-xl">
          <CardHeader>
            <CardTitle className="font-medium text-2xl text-center italic cursor-pointers">
              SABCAN.IO
            </CardTitle>
            <CardDescription>LOGIN</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full max-w-sm items-center gap-3">
              <label htmlFor="email">Email</label>
              <Input placeholder="email@pribadi.com" type="email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <label htmlFor="password">Password</label>
              <Input type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-1/2 justify-end gap-10">
              <p className="text-sm">Lupa Password</p>
              <Button className="bg-purple-600 w-48">Login</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default FormLandingPage;
