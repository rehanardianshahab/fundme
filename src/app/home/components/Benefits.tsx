import TextHeading from "@/app/components/TextHeading";
import { Star, Ticket, Heart } from "lucide-react";
import Image from "next/legacy/image";

export default function Benefits() {
  const data = [
    {
      icon: Star,
      text: {
        label: "Reliable",
        class: "@3xl/main:text-[24px] text-[18px]",
      },
      subtext: {
        label:
          "Our platforms allow crowdfunding projects organizations and investors to connect.",
        class: "@3xl/main:text-[20px] text-[12px]",
      },
    },
    {
      icon: Ticket,
      text: {
        label: "Simple",
        class: "@3xl/main:text-[24px] text-[18px]",
      },
      subtext: {
        label:
          "It’s an easy way to donate or even raise money for the project on our crowdfunding platform.",
        class: "@3xl/main:text-[20px] text-[12px]",
      },
    },
    {
      icon: Heart,
      text: {
        label: "Charity and Humanity",
        class: "@3xl/main:text-[24px] text-[18px]",
      },
      subtext: {
        label:
          "Help those who need the most. Support their creative idea to reach their goals.",
        class: "@3xl/main:text-[20px] text-[12px]",
      },
    },
  ];
  return (
    <>
      <div className="min-h-[calc(100vh-200px)] @container/main">
        <div className="container-main-x py-28">
          <div className="flex @6xl/main:flex-row flex-col-reverse justify-between">
            <div className="w-full @5xl/main:block hidden">
              <div className="relative @3xl/main:w-[450px] w-full h-[450px] mx-auto">
                <Image src="/benefit.svg" alt="Benefit" layout="fill" />
              </div>
            </div>
            <div className="w-full">
              <TextHeading
                className="mb-12"
                text={{
                  label: "Why Choose Us?",
                }}
                subtext={{
                  label:
                    "FUNDME is committed to helping projects reach their goals.",
                }}
              />
              <div className="flex flex-col space-y-10">
                {data.map((_, index) => (
                  <div
                    key={index}
                    className="flex space-x-14 items-center @3xl/main:max-w-[480px] max-w-full"
                  >
                    <div className="p-4 shadow-2xl shadow-secondary rounded-lg">
                      <_.icon className="text-secondary" />
                    </div>
                    <div>
                      <TextHeading text={_.text} subtext={_.subtext} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
