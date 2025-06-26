import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="@container/main">
      <div className="flex flex-col-reverse @3xl/main:flex-row container-main-x justify-between items-center w-full min-h-[100vh] @3xl/main:py-0 py-24">
        <div className="w-full">
          <div className="gap-4">
            <p className="@3xl/main:text-[50px] text-[28px] text-[#3A3A3C] font-bold leading-[130%] mb-6">
              Invest and Be a<br />
              Part of the Project
              <br />
              Development
            </p>
            <span className="leading-[170%] font-[400] text-[#8F90A6]">
              Let&apos;s make people&apos;s dreams come true. Raise money
              <br />
              or invest in this website and you can contribute and
              <br />
              then get your benefit from the project.
            </span>
          </div>
          <Link href="/login">
            <Button className="mt-14">Get Started</Button>
          </Link>
        </div>
        <div className="w-full">
          <div className="relative @3xl/main:w-[550px] w-full h-[550px]">
            <Image src="/Saly-10.svg" alt="hero image" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
