import { PropertyData } from "@/constants/MockData";
import Image from "next/image";
import ConsultSection from "./Section/ConsultSection";
import TestimonialSection from "./Section/TestimonialSection";

const HomeView = () => {
  return (
    <div className="horizontal">
      <div className="flex flex-col lg:flex-row gap-9 flex-wrap sm:flex-nowrap">
        <div className="w-full lg:w-[65%]">
          <span className="text-2xl font-semibold">Tampilan Rumah</span>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 pt-4">
            {PropertyData.map((property, idx) => (
              <div
                key={`${property.name}_${idx}`}
                className="p-4 cursor-pointer rounded-md border-[1px] border-[#E6E6E6]"
              >
                <Image
                  src={property.banner}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={property.name}
                  priority
                  className="w-full h-auto rounded-md mb-6"
                />
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-xl">{property.name}</span>
                  <span className="text-sm">
                    {property.length} x {property.width}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-8">
          <ConsultSection />
          <TestimonialSection />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
