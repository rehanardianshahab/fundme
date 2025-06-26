import TextHeading from "@/app/components/TextHeading";
import Image from "next/legacy/image";

export default function Testimonial() {
  const data = [
    {
      image: "/avatars/author-avatar-0.png",
    },
    {
      image: "/avatars/author-avatar-1.png",
    },
    {
      image: "/avatars/author-avatar-2.png",
    },
    {
      image: "/avatars/author-avatar-3.png",
    },
    {
      image: "/avatars/author-avatar-4.png",
    },
    {
      image: "/avatars/author-avatar-5.png",
    },
    {
      image: "/avatars/author-avatar-6.png",
    },
    {
      image: "/avatars/author-avatar-7.png",
    },
    {
      image: "/avatars/author-avatar-8.png",
    },
    {
      image: "/avatars/author-avatar-9.png",
    },
    {
      image: "/avatars/author-avatar-10.png",
    },
    {
      image: "/avatars/author-avatar-11.png",
    },
    {
      image: "/avatars/author-avatar-12.png",
    },
    {
      image: "/avatars/author-avatar-13.png",
    },
  ];

  return (
    <>
      <div className="min-h-[calc(90vh-100px)] @container/main">
        <div className="container-main-x">
          <TextHeading
            className="text-center justify-center mb-20"
            text={{
              label: "What They Say About Us?",
            }}
            subtext={{
              label: "Here are some testimonials of FUNDME users",
            }}
          />
          <div className="grid @2xl/main:grid-cols-7 grid-cols-2 @lg/main:gap-[50px] gap-[40px] pb-20">
            {data.map((_, index) => (
              <div key={index} className="mx-auto">
                <div className="relative w-[100px] h-[100px]">
                  <Image src={_.image} alt={_.image} layout="fill" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
