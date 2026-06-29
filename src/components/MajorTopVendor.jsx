import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

async function MajorTopVendor() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/sliders`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="relative z-0 group">
      <Carousel className="relative z-0">
        <CarouselContent className="w-full">
          {data?.data?.map((item, index) => (
            <CarouselItem
              key={item.id || index}
              className="relative h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]" // 50% of original
            >
              <div className="absolute inset-0">
                <Image
                  src={item?.photo?.original_url}
                  alt={`Slider image ${index + 1}`}
                  fill
                  className="object-cover w-full h-full rounded-xl"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="left-4 hidden md:flex bg-white/80 hover:bg-white text-black shadow-md"
          variant="default"
          size="lg"
        />
        <CarouselNext
          className="right-4 hidden md:flex bg-white/80 hover:bg-white text-black shadow-md"
          variant="default"
          size="lg"
        />
      </Carousel>
    </div>
  );
}

export default MajorTopVendor;
