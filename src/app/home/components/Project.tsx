"use client";
import Autoplay from "embla-carousel-autoplay";
import TextHeading from "@/app/components/TextHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Card from "@/app/components/Card";

interface SlideProps {
  image: string;
  title: string;
  description: string;
  goals: string;
  date_remaining: number;
  progress: number;
}

export default function Project() {
  const data: SlideProps[] = [
    {
      image: "/trash-in.png",
      title: "Trans In",
      description:
        "We create a platform for helping student find jobs that match their passion.",
      goals: "5.600.000",
      date_remaining: 20,
      progress: 50,
    },
    {
      image: "/portal-career.png",
      title: "Portal Career",
      description:
        "We create a platform for helping student find jobs that match their passion.",
      goals: "2.500.000",
      date_remaining: 20,
      progress: 90,
    },
    {
      image: "/mend.png",
      title: "MEND",
      description:
        "We create a platform to help parents to find out about their child&apos;s mental health.",
      goals: "1.500.000",
      date_remaining: 20,
      progress: 75,
    },
    {
      image: "/bekal.png",
      title: "BEKAL",
      description:
        "We create platform to help parents to find out their child mental health.",
      goals: "1.500.000",
      date_remaining: 0,
      progress: 75,
    },
    {
      image: "/mend.png",
      title: "MEND",
      description:
        "We create a platform to help parents to find out about their child&apos;s mental health.",
      goals: "1.500.000",
      date_remaining: 20,
      progress: 75,
    },
  ];
  return (
    <div className="@container/main flex flex-col gap-12 mb-24 bg-muted pt-24">
      <div className="container-main-x">
        <TextHeading
          text={{
            label: "Explore The Projects",
          }}
          button={{
            label: "See More",
            size: "lg",
            variant: "outline",
          }}
        />
      </div>
      <Carousel
        showIndicator
        className="container-max-main-x pb-28"
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {data.map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 lg:basis-1/2 xl:basis-1/4"
            >
              <Card data={_} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
