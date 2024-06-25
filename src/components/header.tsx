import { Mail, Phone } from "lucide-react";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { MaxWidthWrapper } from "./max-width-wrapper";

export const Header = () => {
  return (
    <div className="bg-[#77d7d3] w-full ">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row gap-2 py-2 md:justify-between md:items-center">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <span className="flex gap-1 items-center">
              <Phone className="w-4 h-4 stroke-[#126360]" />
              <span className="text-sm font-medium text-[#126360]">
                +91 768 090 9876
              </span>
            </span>
            <span className="flex items-center gap-1 ">
              <Mail className="w-4 h-4 stroke-[#126360]" />
              <span className="text-sm font-medium text-[#126360]">
                info@ssvpkbkm.com
              </span>
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex items-center gap-2 text-[#126360]">
              <FaInstagram className="stroke-[#126360] w-4 h-4" />
              <MdFacebook className="stroke-[#126360] w-4 h-4" />
              <FaTwitter className="stroke-[#126360] w-4 h-4" />
              <FaPinterest className="stroke-[#126360] w-4 h-4" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

