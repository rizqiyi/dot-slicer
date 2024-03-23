import Button from "@/components/Button";
import Image from "next/image";

interface PropertySpecificationProps {
  isDetail?: boolean;
}

const PropertySpecification: React.FC<PropertySpecificationProps> = (
  props: PropertySpecificationProps
) => {
  const { isDetail = false } = props;
  return (
    <>
      <div className="py-4 flex items-center justify-between flex-wrap gap-2 gap-y-4 border-b-[1px] border-b-[#E6E6E6]">
        <div className="flex flex-col max-w-fit items-center justify-start text-center">
          <Image
            src="/assets/icons/dimension-ic.svg"
            width={24}
            height={24}
            alt="dimension"
            quality={99}
            priority
          />
          <span className="text-[#808080] text-xs whitespace-nowrap">
            Dimensi Tanah
          </span>
          <span className="text-xs">15 x 8m</span>
        </div>
        <div className="flex flex-col max-w-fit items-center justify-center text-center">
          <Image
            src="/assets/icons/area-ic.svg"
            width={24}
            height={24}
            alt="dimension"
            quality={99}
            priority
          />
          <span className="text-[#808080] text-xs whitespace-nowrap">
            Luas Bangunan
          </span>
          <span className="text-xs">112m&sup2;</span>
        </div>
        <div className="flex flex-col max-w-fit items-center justify-center text-center">
          <Image
            src="/assets/icons/floor-ic.svg"
            width={24}
            height={24}
            alt="dimension"
            quality={99}
            priority
          />
          <span className="text-[#808080] text-xs">Lantai</span>
          <span className="text-xs">2</span>
        </div>
        <div className="flex flex-col max-w-fit items-center justify-center text-center">
          <Image
            src="/assets/icons/bedroom-ic.svg"
            width={25}
            height={24}
            alt="dimension"
            quality={99}
            priority
          />
          <span className="text-[#808080] text-xs whitespace-nowrap">
            Kamar Tidur
          </span>
          <span className="text-xs">4</span>
        </div>
      </div>
      <div className="py-4 flex flex-col">
        <span className="text-sm">Harga Desain</span>
        <span className="text-[32px] font-semibold">Rp. 32.500.000</span>
        <span className="text-sm text-[#808080]">
          Harga konstruksi mulai dari Rp 560.000.000
        </span>
      </div>
      <Button
        variant={isDetail ? "primary-outlined" : "primary"}
        className="w-full"
      >
        {isDetail ? "Lihat Detail" : "Konsultasi Sekarang"}
      </Button>
    </>
  );
};

export default PropertySpecification;
