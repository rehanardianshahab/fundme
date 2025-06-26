import {
  Card as CardUI,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock } from "lucide-react";
import Image from "next/legacy/image";

interface SlideProps {
  image: string;
  title: string;
  description: string;
  goals: string;
  date_remaining: number;
  progress: number;
}
export default function Card({ data }: { data: SlideProps }) {
  return (
    <CardUI className="rounded-md bg-white py-0">
      <div className="relative w-full h-[200px]">
        <Image
          src={data.image}
          alt={data.title}
          layout="fill"
          className="rounded-t-md w-full h-full"
        />
      </div>
      <div className="p-8">
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>
          <p className="text-justify">{data.description}</p>
          <div className="flex items-center justify-between mt-10 mb-2 text-primary">
            <p>Goals</p>
            <p>Rp {data.goals}</p>
          </div>
          <Progress value={data.progress} />
          <div className="mt-6 flex space-x-2 text-[#8F90A6]">
            <Clock width={20} />{" "}
            <p>
              {data.date_remaining > 0
                ? `${data.date_remaining} Days left`
                : "Ended"}{" "}
            </p>
          </div>
        </CardDescription>
      </div>
    </CardUI>
  );
}
