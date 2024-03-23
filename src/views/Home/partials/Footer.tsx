import { Mitra } from "@/constants/MockData";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="horizontal py-10 bg-[#012846]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-40">
        <div className="col-span-2">
          <Image
            src="/assets/images/logo-bw.png"
            width={169}
            height={47}
            alt="logo-bw"
            priority
          />
          <div className="mt-4">
            <span className="text-white">
              SobatBangun adalah platform digital dari SIG yang bergerak dengan
              misi mengembangkan proses pembangunan dan renovasi rumah secara
              lebih baik serta berkelanjutan.
            </span>
          </div>
          <div className="mt-2 gap-2 flex items-center">
            <Image
              src="/assets/icons/message-ic.svg"
              width={24}
              height={24}
              alt="message"
              priority
            />
            <span className="text-white underline cursor-pointer">
              sobat@sobatbangum.com
            </span>
          </div>
          <div className="mt-[30px] mb-4">
            <span className="text-white">Sosial Media :</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#2C373E] rounded-full">
              <Image
                src="/assets/icons/instagram-ic.svg"
                width={20}
                height={18}
                alt="instagram"
              />
            </div>
            <div className="flex items-center justify-center w-[50px] h-[50px] bg-white rounded-full">
              <Image
                src="/assets/icons/facebook-ic.svg"
                width={10}
                height={15}
                alt="facebook"
              />
            </div>
            <div className="flex items-center justify-center w-[50px] h-[50px] bg-white rounded-full">
              <Image
                src="/assets/icons/youtube-ic.svg"
                width={22}
                height={22}
                alt="instagram"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-2">
          <div className="col-span-1">
            <span className="text-white font-bold text-xl">
              Produk & Layanan
            </span>
            <ul className="mt-6 flex flex-col gap-2 leading-8 text-white">
              <li>Renovasi</li>
              <li>Bangun Rumah</li>
              <li>Layanan Desain</li>
              <li>Teknologi Tambahan</li>
              <li>Beli Material</li>
            </ul>
          </div>
          <div className="col-span-1">
            <span className="text-white font-bold text-xl">Tentang Kami</span>
            <ul className="mt-6 flex flex-col gap-2 leading-8 text-white">
              <li>Tentang SobatBangun</li>
              <li>Kebijakan dan Privasi</li>
              <li>Syarat dan Ketentuan</li>
              <li>FAQ</li>
              <li>Daftar Menjadi Mitra</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-[46px]">
        {Mitra.map((m) => (
          <div key={m.name} className="">
            <span className="text-white font-semibold">{m.name}</span>
            <div className="flex gap-6 mt-1 items-center">
              {m.images.map((img) => (
                <div className="cursor-pointer" key={`${m.name}_${img}`}>
                  <Image
                    src={`/assets/images/${img}.png`}
                    width={60}
                    height={60}
                    alt={img}
                    priority
                    quality={100}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-y-4 items-center justify-between mt-[46px]">
        <div className="flex items-center gap-4">
          <span className="text-white mt-2">Powered by: </span>
          <div className="">
            <Image
              src="/assets/images/sig.png"
              width={71}
              height={41}
              alt="sig"
              priority
              quality={100}
            />
          </div>
        </div>
        <span className="text-sm text-white">
          Copyright © 2023 SobatBangun. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
