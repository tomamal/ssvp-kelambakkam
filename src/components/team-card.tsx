import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

export const TeamCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="flex flex-col gap-2 items-center h-full">
      <Image
        src={image}
        alt="volunteer image"
        width={200}
        height={300}
        className="cursor-pointer hover:scale-105 transition-all duration-300 aspect-auto"
      />
      <span className="text-xs font-medium font-shippori_mincho">{name}</span>
      <div className="flex items-center gap-2">
        <FaInstagram size={12} />
        <FaFacebook size={12} />
        <FaTwitter size={12} />
        <FaPinterest size={12} />
      </div>
    </div>
  );
};
