import Image from "next/image";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import Drawer from "@/components/Drawer";

const Header = () => {
  return (
    <div className="horizontal">
      <div className="py-10 flex w-full justify-between items-center">
        <Image
          src="/assets/images/logo-colors.png"
          width={147}
          height={42}
          priority
          alt="logo"
        />
        <ul className="hidden lg:flex items-center gap-8">
          <li className="font-semibold hover:text-primary hover:fill-primary flex items-center gap-3 cursor-pointer">
            <span>Tentang Kami</span>
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 6.83463L0 1.83464L1.16667 0.667969L5 4.5013L8.83333 0.667969L10 1.83464L5 6.83463Z" />
            </svg>
          </li>
          <li className="font-semibold hover:text-primary hover:fill-primary flex items-center gap-3 cursor-pointer">
            <span>Produk & Layanan</span>
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 6.83463L0 1.83464L1.16667 0.667969L5 4.5013L8.83333 0.667969L10 1.83464L5 6.83463Z" />
            </svg>
          </li>
          <li className="font-semibold hover:text-primary cursor-pointer">
            Blog
          </li>
          <li className="font-semibold hover:text-primary cursor-pointer">
            FAQ
          </li>
        </ul>
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost">Daftar</Button>
          <Button variant="primary">Masuk</Button>
        </div>
        <div className="block lg:hidden">
          <Drawer />
        </div>
      </div>
      <Breadcrumbs
        data={[
          { label: "Home" },
          { label: "Layanan Design" },
          { label: "Omah Apik 3" },
        ]}
      />
    </div>
  );
};

export default Header;
