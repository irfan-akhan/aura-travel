"use client";
import Image from "next/image";
import Button from "./Button";
import { TOURS } from "@/constants";
import { useRouter } from "next/navigation";

const Destination = () => {
  const router = useRouter();

  return (
    <section
      className="2xl:max-container relative flex flex-col py-10 lg:p-10 lg:mb-10 lg:py-20 xl:mb-20"
      id="tours"
    >
      <div className="pb-20 scrollbar-thumb-rounded-full scrollbar-track-rounded scrollbar scrollbar-thumb-green-700 scrollbar-track-green-500  flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] max-[720px]:flex-col max-[720px]:h-full max-[720px]:overflow-x-hidden">
        {TOURS.map((tour) => (
          <div
            className={`h-full  min-w-[500px] max-[720px]:h-[300px] max-[720px]:w-[300px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl cursor-pointer`}
            style={{ backgroundImage: `url(${tour.image})` }}
            onClick={() => router.push(`/tour/${tour.tourHeading}`)}
            id="tours"
            key={tour?.id}
          >
            <div className="flex h-full flex-col max-[720px]:w-[350px]  items-start justify-between p-6 lg:px-20 lg:py-10">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-50 p-4">
                  <Image
                    src="/folded-map.svg"
                    alt="map"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="flex flex-col   gap-1">
                  <h4 className="bold-18 text-white">{tour?.title}</h4>
                  <div className="flex flex-wrap  gap-1">
                    {tour?.subtitle?.split(",").map((title) => (
                      <Button
                        type="button"
                        title={`${title},`}
                        variant="btn_transparent"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// const Destination = () => {
//   return (
//     <section className="2xl:max-container relative flex flex-col py-10 lg:p-10 lg:mb-10 lg:py-20 xl:mb-20">
//       <div className="pb-20 scrollbar-thumb-rounded-full scrollbar-track-rounded scrollbar scrollbar-thumb-green-700 scrollbar-track-green-500  flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] max-[720px]:flex-col max-[720px]:h-full max-[720px]:overflow-x-hidden">
//         <DestinationSite
//           backgroundImage="bg-tour1"
//           title="Kashmir 3 Days 2 Nights Tour"
//           subtitle="Srinagar, Pahalgam, Gulmarg"
//         />
//         <DestinationSite
//           backgroundImage="bg-tour2"
//           title="Kashmir 4 Days 3 Nights Tour"
//           subtitle="Srinagar, Gulmarg, Pahalgam"
//         />
//         <DestinationSite
//           backgroundImage="bg-tour3"
//           title="Kashmir 5 Days 4 Nights Tour"
//           subtitle="Srinagar, Gulmarg, Pahalgam, Sonmarg"
//         />
//         <DestinationSite
//           backgroundImage="bg-tour4"
//           title="Kashmir 6 Days 5 Nights Tour"
//           subtitle="Srinagar, Gulmarg, Pahalgam, Sonmarg, Exploration"
//         />
//         <DestinationSite
//           backgroundImage="bg-tour5"
//           title="Kashmir 7 Days 6 Nights Tour"
//           subtitle="Srinagar, Gulmarg, Pahalgam, Sonmarg, Doodhpathri, Exploration"
//         />
//       </div>
//     </section>
//   );
// };

export default Destination;
