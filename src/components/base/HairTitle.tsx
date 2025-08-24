import React from "react";
import clsx from "clsx";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type FontFamily = "opensauce" | "texgyrebonum" | "norwester" | 'inter';
type FontSize = "small" | "normal" | "medium" | "large" | "xlarge";
type FontWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type FontColor = "primary" | "secondary" | "white" | "black";

interface IHairTitleProps {
  as?: HeadingLevel;
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  className?: string;
  color?: FontColor;
  children: React.ReactNode;
}

const fontSizeClasses: Record<FontSize, string> = {
  small: "text-[16px] leading-[120%]",
  normal: "text-[20px] leading-[150%]",
  medium: "text-[32px] leading-[114%]",
  large: "text-[56px] leading-[114%]",
  xlarge: "text-[72px] leading-[100%]",
};

const fontFamilyClasses: Record<FontFamily, string> = {
  opensauce: "font-opensauce",
  texgyrebonum: "font-texgyrebonum",
  norwester: "font-norwester",
  inter:'font-inter'
};
const fontColorClasses: Record<FontColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  white: "text-white",
  black: "text-black",
};

const fontWeightClasses: Record<FontWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

function HairTitle({
  as: Tag = "h2",
  fontFamily = "opensauce",
  fontSize = "normal",
  fontWeight = "normal",
  color = "secondary",
  className,
  children,
}: IHairTitleProps) {
  return (
    <Tag
      className={clsx(
        fontSizeClasses[fontSize],
        fontFamilyClasses[fontFamily],
        fontWeightClasses[fontWeight],
        fontColorClasses[color],
        className
      )}
    >
      {children}
    </Tag>
  );
}

export default HairTitle;
