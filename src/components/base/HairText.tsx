import React from "react";
import clsx from "clsx";

type TextTag = "p" | "span";
type FontFamily = "opensauce" | "texgyrebonum" | "norwester" | "inter";
type FontSize = "small" | "normal" | "medium" | "large" | "xlarge";
type FontWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type FontColor = "primary" | "secondary" | "white" | "black";

interface IHairTextProps {
  as?: TextTag;
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  color?: FontColor;
  className?: string;
  children: React.ReactNode;
}

const fontSizeClasses: Record<FontSize, string> = {
  small: "text-[12px] leading-[14px]",
  normal: "text-[18px] leading-[22px]",
  medium: "text-[20px] leading-[24px]",
  large: "text-[24px] leading-[28px]",
  xlarge: "text-[28px] leading-[32px]",
};

const fontFamilyClasses: Record<FontFamily, string> = {
  opensauce: "font-opensauce",
  texgyrebonum: "font-texgyrebonum",
  norwester: "font-norwester",
  inter:'font-inter'
};

const fontWeightClasses: Record<FontWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const fontColorClasses: Record<FontColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  white: "text-white",
  black: "text-black",
};

function HairText({
  as: Tag = "p",
  fontFamily = "texgyrebonum",
  fontSize = "normal",
  fontWeight = "normal",
  color = "secondary",
  className,
  children,
}: IHairTextProps) {
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

export default HairText;
