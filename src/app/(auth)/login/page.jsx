"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import authBackground from "../../../assets/authBackgorund.jpg";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { loginUser } from "@/action/api/login";
import { storageUserInfo } from "@/action/auth.service";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await loginUser({ email, password });
      if (res?.access_token) {
        storageUserInfo(res?.access_token);
        toast.success(res?.message);
        setTimeout(() => {
          router.push("/");
          window.location.href = "/";
        }, 3000);
      } else if (res?.success === false) {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${authBackground.src})` }}
      />
      {/* Overlay Layer (darkens background) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Glass Card */}
      <Card className="relative z-10 w-full max-w-md shadow-xl backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-white drop-shadow-sm">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="py-2 text-white/90">Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
            />
          </div>
          <div>
            <Label className="py-2 text-white/90">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="bg-[#7CAE4D] cursor-pointer hover:bg-[#7CAE4D]/80 text-white w-full backdrop-blur-sm"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </CardFooter>
        <b className="text-sm px-5 pb-4 block text-white/80">
          If you have no account please{" "}
          <Link className="text-blue-300 hover:text-blue-200" href="/register">
            <b>Register</b>
          </Link>
        </b>
      </Card>
      <Toaster reachColor position="top-right" />
    </div>
  );
}