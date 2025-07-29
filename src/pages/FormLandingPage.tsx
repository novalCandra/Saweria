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
import Api from "@/api/ApiAxios";
import React, { useState } from "react";

function FormLandingPage() {
  const [form, setFrom] = useState({ email: "", password: "" });

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmits = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const respon = await Api.post("/login", form);
      localStorage.setItem("token", respon.data.token);
      console.log("Berhasil");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-4">
        <form
          onSubmit={handleSubmits}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg"
        >
          <Card className="border-2 sm:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
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
                <Input
                  placeholder="email@pribadi.com"
                  type="email"
                  value={form.email}
                  onChange={HandleChange}
                  name="email"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={HandleChange}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
                <p className="flex flex-1/2 text-sm text-gray-400 hover:text-purple-600 cursor-pointer">
                  Sign up
                </p>
                <Button
                  variant="custom"
                  className="cursor-pointer"
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}

export default FormLandingPage;
