

type HairLogoProps = {
  bgColor?: string; // background color (Tailwind or HEX)
  imageUrl?: string; // logo image URL
  alt?: string; // alt text for accessibility
  width?: number | string; // width (px, rem, or Tailwind)
  height?: number | string; // height (px, rem, or Tailwind)
  className?: string; // extra custom classes
  isBgEnable: boolean;
};

function HairLogo({
  bgColor = "bg-primary",
  imageUrl = "./assets/images/logo.svg",
  alt = "FixHair",
  width = "auto",
  height = "auto",
  className = "",
  isBgEnable = false,
}: HairLogoProps) {
  return isBgEnable ? (
    <div
      className={`${bgColor} flex items-center justify-center px-3 sm:px-4 py-3 sm:py-4 ${className}`}
    >
      <img
        style={{ width, height }}
        src={imageUrl}
        alt={alt}
        className="object-cover max-h-full max-w-full"
      />
    </div>
  ) : (
    <img
      style={{ width, height }}
      src={imageUrl}
      alt={alt}
      className="object-cover max-h-full max-w-full"
    />
  );
}

export default HairLogo;
