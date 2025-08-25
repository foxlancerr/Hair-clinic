import HairLogo from "../base/HairLogo";
import HairText from "../base/HairText";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { LiaFacebookSquare } from "react-icons/lia";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";
import HairTitle from "../base/HairTitle";

function Footer() {
  return (
    <footer className="bg-black text-white w-full flex flex-col pt-[32px] sm:pt-[72px] pb-[10px]">
      <div className="custom-container">
        {/* top div */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 sm:justify-between sm:items-center ">
          <div className="flex flex-col items-start gap-4 text-white">
            <HairLogo isBgEnable width={70}></HairLogo>
            <HairText as="p" fontSize="small" color="white">
              Fixing Your Hair with Innovation and Expertise
            </HairText>
            <div className="flex flex-row gap-4 items-center">
              <span className="bg-primary text-secondary rounded-md p-2">
                <SlSocialYoutube size={20}></SlSocialYoutube>
              </span>
              <span className="bg-grayy hover:bg-primary duration-150 text-white hover:text-secondary rounded-md p-2">
                <SlSocialInstagram size={20}></SlSocialInstagram>
              </span>
              <span className="bg-grayy hover:bg-primary duration-150 text-white hover:text-secondary rounded-md p-2">
                <LiaFacebookSquare size={20}></LiaFacebookSquare>
              </span>
              <span className="bg-grayy hover:bg-primary duration-150 text-white hover:text-secondary rounded-md p-2">
                <FaXTwitter size={20}></FaXTwitter>
              </span>
              <span className="bg-grayy hover:bg-primary duration-150 text-white hover:text-secondary rounded-md p-2">
                <PiLinkedinLogoLight size={20}></PiLinkedinLogoLight>
              </span>
            </div>
          </div>

          {/* links lists */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-10">
            <div className="flex flex-row justify-between gap-4 sm:w-[300px]">
              <div className="flex flex-col gap-3">
                <HairTitle as="h3" color="primary" fontSize="normal">
                  Home
                </HairTitle>
                <div className="flex flex-col gap-4">
                  <HairText
                    as="p"
                    fontSize="small"
                    fontWeight="light"
                    color="white"
                  >
                    Services
                  </HairText>
                  <HairText as="p" fontSize="small" color="white">
                    About us
                  </HairText>
                  <HairText as="p" fontSize="small" color="white">
                    Gallery
                  </HairText>
                  <HairText as="p" fontSize="small" color="white">
                    Contact us
                  </HairText>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <HairTitle as="h3" color="primary" fontSize="normal">
                  Support
                </HairTitle>
                <div className="flex flex-col gap-4">
                  <HairText
                    as="p"
                    fontSize="small"
                    fontWeight="light"
                    color="white"
                  >
                    Contact Support
                  </HairText>
                  <HairText as="p" fontSize="small" color="white">
                    Privacy Policy
                  </HairText>
                  <HairText as="p" fontSize="small" color="white">
                    Content Guidelines
                  </HairText>
                  <HairText as="p" fontSize="small" color="white">
                    Cookies Policy
                  </HairText>
                </div>
              </div>
            </div>

            {/* newsletter */}
            <div className="flex flex-2 flex-col items-start gap-3 sm:w-[440px] ">
              <HairTitle as="h3" color="primary" fontSize="normal">
                Join our newsletter
              </HairTitle>
              <div className="inline-flex w-full flex-row h-fit border border-grayy p-1 sm:p-1 items-center">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="text-grayy p-2 sm:p-4 w-full outline-none border-none focus:border-none"
                />
                <span className="p-2 sm:p-4 cursor-pointer bg-primary text-secondary">
                  <IoMdArrowForward size={24} />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom div */}
        <div className="flex flex-row gap-4 justify-center sm:justify-between items-center border-t-2 border-t-grayy py-4 mt-4 sm:mt-8">
          <HairText as="p" fontSize="small" color="white" className="">
            ©Fixmyhair 2025. All rights reserved
          </HairText>

          <div className="hidden flex-row gap-2 sm:flex">
            <HairText as="p" fontSize="small" color="white">
              Privacy Policy
            </HairText>
            <HairText as="p" fontSize="small" color="white">
              Terms of service
            </HairText>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
