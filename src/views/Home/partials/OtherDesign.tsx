import { OtherDesignData } from "@/constants/MockData";
import Image from "next/image";
import PropertySpecification from "./Section/PropertySpesification";

const OtherDesign = () => {
  return (
    <div className="horizontal mt-20 sm:mt-30 md::mt-[135px] mb-10">
      <span className="text-2xl font-semibold">
        Desain Lainnya oleh Studio SAe
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-6">
        {OtherDesignData.map((design) => (
          <div
            key={design.name}
            className="p-4 rounded-md border-[1px] border-[#E6E6E6]"
          >
            <Image
              src={design.banner}
              width={0}
              height={0}
              sizes="100vw"
              alt={design.name}
              priority
              className="w-full h-auto rounded-md mb-6"
            />
            <div className="flex gap-2">
              <span className="font-bold text-xl text-[#1A202C]">
                {design.name}
              </span>
              <div className="bg-[#F1F1F1] px-3 py-1 rounded-2xl text-sm">
                {design.type}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Image
                src="/assets/images/logo-studio-sae.png"
                width={28}
                height={28}
                alt="studio-sae"
                quality={99}
                priority
                sizes="28px"
              />
              <span className="text-sm">{design.studio}</span>
            </div>
            <PropertySpecification isDetail />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherDesign;
