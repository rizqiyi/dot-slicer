"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";

const Index = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Image
        src="/assets/icons/hamburger-ic.svg"
        width={30}
        height={30}
        alt="menu"
        onClick={toggleDrawer}
      />
      <div
        className={`fixed right-0 top-0 h-full w-full bg-white shadow-lg z-50 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <Image
              src="/assets/icons/close-ic.svg"
              width={20}
              height={20}
              alt="close"
              onClick={toggleDrawer}
            />
          </div>
          <Image
            src="/assets/images/logo-colors.png"
            width={120}
            height={47}
            alt="logo-colors"
            priority
          />
          <ul className="flex flex-col mt-8 items-start gap-8">
            <li className="font-semibold hover:text-primary flex items-center gap-3 cursor-pointer">
              <span>Tentang Kami</span>
              <Image
                src="/assets/icons/arrow-down-ic.svg"
                width={10}
                height={7}
                alt="arrow-down"
              />
            </li>
            <li className="font-semibold hover:text-primary flex items-center gap-3 cursor-pointer">
              <span>Produk & Layanan</span>
              <Image
                src="/assets/icons/arrow-down-ic.svg"
                width={10}
                height={7}
                alt="arrow-down"
              />
            </li>
            <li className="font-semibold hover:text-primary cursor-pointer">
              Blog
            </li>
            <li className="font-semibold hover:text-primary cursor-pointer">
              FAQ
            </li>
          </ul>
          <div className="flex mt-8 items-center gap-4">
            <Button className="w-[50%]" variant="ghost">
              Daftar
            </Button>
            <Button className="w-[50%]" variant="primary">
              Masuk
            </Button>
          </div>
        </div>
      </div>
      {/* Overlay for closing the drawer */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-40" />
      )}
    </div>
  );
};

export default Index;
