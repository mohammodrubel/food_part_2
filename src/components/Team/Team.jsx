"use client";

import { employeesAPi } from "@/app/api/emplyee/emplyeeApi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import useTranslation from "@/hooks/useTranslation";

function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  // employeesAPi
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await employeesAPi();
        setTeam(response?.data || []);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);
const t = useTranslation();
  return (
    <div className="container mx-auto my-16">
      <div className="text-center my-10 px-4">
        <div className="flex items-center justify-center mb-6">
          <Users className="h-8 w-8 sm:h-12 sm:w-12 text-[#7CAE4D] mr-2 sm:mr-4" />
          <h1 className="text-2xl sm:text-4xl text-[#7CAE4D] md:text-6xl font-bold">
            {t("navigation.meet", "Meet Our Team")}
          </h1>
        </div>
        <p className="text-base sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
          {t("navigation.dis","The dedicated professionals behind BestFoodImporters, bringing you quality and excellence in every import")}
          
        </p>
      </div>

      <Carousel className="w-full max-w-6xl mx-auto px-4">
        <CarouselContent>
          {loading
            ? [...Array(5)].map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div className="relative mx-auto w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]">
                    <Skeleton className="w-full h-full rounded-2xl" />
                  </div>
                </CarouselItem>
              ))
            : team?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div className="relative mx-auto group w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]">
                    <Image
                      className="rounded-2xl w-full h-full object-cover"
                      src={item?.media[0].original_url}
                      width={200}
                      height={200}
                      alt="team photo"
                    />
                    <div className="absolute inset-0 bg-[#7CAE4D] rounded-2xl opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center flex-col text-white text-center px-2">
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-sm">{item.specialist}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>
        {/* Custom Arrow Buttons */}
        <CarouselPrevious
          className="left-4 hidden md:flex"
          variant="default"
          size="lg"
        />
        <CarouselNext
          className="right-4 hidden md:flex"
          variant="default"
          size="lg"
        />
      </Carousel>
    </div>
  );
}

export default Team;
