import TextHeading from "@/app/components/TextHeading";
import { cn } from "@/lib/utils";

export default function Portofolio() {
  const data = [
    {
      label: "Active Projects",
      class: "bg-[#73A0E1]",
      score: 35,
    },
    {
      label: "Finished Projects",
      class: "bg-[#3F72AF]",
      score: 25,
    },
    {
      label: "Active Projects",
      class: "bg-[#00477F]",
      score: 50,
    },
  ];
  return (
    <>
      <div className="bg-muted @container/main py-24">
        <div className="container-main-x">
          <TextHeading
            className="mb-12"
            text={{
              label: "Our Growth So Far",
            }}
          />
          <div className="grid @4xl/main:grid-cols-12 @2xl/main:gap-24 gap-8">
            {data.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "@4xl/main:col-span-4 w-full p-12 rounded-md shadow-lg text-white text-center",
                  _.class
                )}
              >
                <p className="font-bold text-[44px] leading-[130%]">
                  {_.score}k +
                </p>
                <span>{_.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
