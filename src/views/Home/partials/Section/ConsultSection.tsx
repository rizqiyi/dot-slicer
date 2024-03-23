import Image from "next/image";
import PropertySpecification from "./PropertySpesification";

const ConsultSection = () => {
  return (
    <div className="p-6 rounded-2xl border-[1px] border-[#E6E6E6]">
      <span className="text-2xl font-semibold">Omah Apik 3</span>
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
        <span className="text-sm">Studio SAe</span>
      </div>
      <div className="mt-4 flex flex-col gap-y-2 pb-4 border-b-[1px] border-b-[#E6E6E6]">
        <div className="flex">
          <span className="text-sm min-w-[110px] text-[#4D4D4D]">
            Jenis Rumah
          </span>
          <span className="text-sm">Scandinavian</span>
        </div>
        <div className="flex">
          <span className="text-sm min-w-[110px] text-[#4D4D4D]">
            Tipe Desain
          </span>
          <div className="text-sm text-primary flex items-center gap-2">
            <Image
              src="/assets/icons/check-ic.svg"
              width={16}
              height={17}
              alt="check"
              quality={99}
              priority
              className="w-auto h-auto"
            />
            <span>Dapat Dimodifikasi</span>
          </div>
        </div>
      </div>
      <PropertySpecification />
    </div>
  );
};

export default ConsultSection;
