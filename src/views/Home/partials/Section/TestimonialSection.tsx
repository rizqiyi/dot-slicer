import Image from "next/image";

const TestimonialSection = () => {
  return (
    <div>
      <span className="text-2xl text-[#1A1A1A] font-semibold">Testimoni</span>
      <div className="flex flex-col gap-4 mt-4">
        {Array(3)
          .fill("")
          .map((_, idx) => (
            <div key={idx} className="flex gap-4">
              <Image
                src="/assets/images/account.png"
                width={44}
                height={44}
                alt="account"
                quality={99}
                priority
                className="w-[44px] h-[44px]"
              />
              <div className="flex flex-col gap-1">
                <div className="flex items-center">
                  <span className="pr-2 font-semibold text-[#1A1A1A] leading-none border-r-[1px] border-r-[#C5C7D0]">
                    Budi Setiadi
                  </span>
                  <div className="pl-2 flex items-center gap-1">
                    <Image
                      src="/assets/icons/star-ic.svg"
                      width={13}
                      height={13}
                      alt="star"
                      quality={99}
                      priority
                    />
                    <span className="text-[#4A5568] text-sm">4.5</span>
                  </div>
                </div>
                <span className="text-[#666666]">
                  Desainnya sangat bagus dan pengirimannya cepat. Terima kasih
                  Sobat Bangun
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
