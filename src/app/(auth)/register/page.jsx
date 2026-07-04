"use client";

import { registerUser } from "@/action/api/register";
import { storageUserInfo } from "@/action/auth.service";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import authBackground from "../../../assets/authBackgorund.jpg";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await registerUser(form);
      if (res?.access_token) {
        storageUserInfo(res.access_token);
        toast.success(res?.message);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else if (res?.error) {
        toast.error(res?.error);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center flex-col items-center min-h-screen px-4">
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
          <CardTitle className="text-2xl text-white drop-shadow-sm">Register</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name" className="py-2 text-white/90">Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
            />
          </div>
          <div>
            <Label htmlFor="email" className="py-2 text-white/90">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
            />
          </div>
          <div>
            <Label htmlFor="password" className="py-2 text-white/90">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="bg-[#7CAE4D] hover:bg-[#7CAE4D]/80 text-white w-full backdrop-blur-sm"
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </CardFooter>
        <p className="text-sm py-2 px-5 pb-4 text-white/80">
          If you already have an account, please{" "}
          <Link className="text-blue-300 hover:text-blue-200 font-semibold" href="/login">Login</Link>
        </p>
      </Card>
      <Toaster reachColor position="top-right" />
    </div>
  );
}