"use client";

import Image from "next/legacy/image";
import TextHeading from "../components/TextHeading";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FormLogin from "./components/Form";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="@container/main w-full py-48">
        <div className="container-main-x min-h-[calc(70vh-200px)]">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-5 bg-secondary flex justify-center items-center p-24 @2xl/main:rounded-l-2xl @2xl/main:rounded-t-none rounded-t-2xl">
              <div className="relative w-full max-w-[550px]">
                <Image
                  src="/Saly-22.svg"
                  alt="Login"
                  layout="responsive"
                  width={550}
                  height={550}
                />
              </div>
            </div>
            <div className="col-span-7 bg-gradient-to-br front-[#F5F5F5] to-[#E0E0E0] border-1 @2xl/main:p-24 p-8 @2xl/main:rounded-r-2xl @2xl/main:rounded-bl-none rounded-b-2xl">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LoginForm() {
  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });

  type Model = z.infer<typeof formSchema>;

  const form = useForm<Model>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {};
  return (
    <div className="w-full">
      <TextHeading
        className="justify-center text-center mb-16"
        text={{ label: "Welcome" }}
        subtext={{
          label: `It's nice to see you, please sign in to continue`,
        }}
      />
      <FormLogin<Model> form={form} onSubmit={onSubmit}>
        <Button className="w-full" size="lg">
          Login
        </Button>
      </FormLogin>
      <p className="text-sm mt-14 text-center">
        <span>Don’t have an account? Please </span>
        <Link href="/" className="text-secondary">
          Register
        </Link>
      </p>
    </div>
  );
}
