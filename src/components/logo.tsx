import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <Link href="/" className="flex items-center ">
        <Image
          src="/SSVP-logo.png"
          alt="SSVDP logo"
          width={60}
          height={60}
          className="hidden lg:block"
        />
        <h1 className="text-[#126360] text-sm md:text-xl font-bold tracking-tighter uppercase bg-gradient-to-r from-green-800 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
          SSVP Kelambakkam
        </h1>
      </Link>
    </div>
  );
};

export const MobileLogo = () => {
  return (
    <>
      <Link href="/" className="flex items-center">
        <h1 className="text-[#126360] text-xl font-bold tracking-tighter uppercase bg-gradient-to-r from-green-800 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
          SSVP Kelambakkam
        </h1>
      </Link>
    </>
  );
};
