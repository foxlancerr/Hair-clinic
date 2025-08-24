import React from "react";
import clsx from "clsx";

// Font & Style Types
type FontFamily = "opensauce" | "texgyrebonum" | "norwester" | "inter";
type FontSize = "small" | "normal" | "medium" | "large" | "xlarge";
type BorderSize = "b1" | "b2" | "b3" | "b4" | "none";
type FontWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type ThemeColor = "primary" | "secondary" | "white" | "black" | "transparent";
type RoundedSize = "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "full";

// Props
interface HairButtonProps {
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  color?: ThemeColor;
  bgColor?: ThemeColor;
  rounded?: RoundedSize;
  className?: string;
  children: React.ReactNode;
  borderEnable?: boolean;
  borderSize?: BorderSize;

  // shadow container
  shadowEnable?: boolean;
  shadowColor?: ThemeColor;
  shadowWidth?: string; // px, %, auto
  shadowHeight?: string; // px, %, auto
  offsetX?: string;
  offsetY?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  shadowPosition?: Partial<Record<"top" | "right" | "bottom" | "left", string>>;
}

// Size classes
const fontSizeClasses: Record<FontSize, string> = {
  small: "text-[14px] leading-[120%] ",
  normal: "text-[16px] leading-[150%]",
  medium: "text-[18px] leading-[140%]",
  large: "text-[20px] leading-[120%] ",
  xlarge: "text-[24px] leading-[120%]",
};

// Size classes
const borderSizeClasses: Record<BorderSize, string> = {
  b1: "border-1",
  b2: "border-2",
  b3: "border-3",
  b4: "border-4",
  none: "border-none",
};

// Font family
const fontFamilyClasses: Record<FontFamily, string> = {
  opensauce: "font-opensauce",
  texgyrebonum: "font-texgyrebonum",
  norwester: "font-norwester",
  inter: "font-inter",
};

// Font weight
const fontWeightClasses: Record<FontWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

// Text / bg colors
const buttonColorClasses: Record<ThemeColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  white: "text-white",
  black: "text-black",
  transparent: "text-black",
};

const buttonBgColorClasses: Record<ThemeColor, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  white: "bg-white ",
  black: "bg-black ",
  transparent: "bg-transparent ",
};

// Shadow bg colors
const bgClasses: Record<ThemeColor, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  white: "bg-white",
  black: "bg-black",
  transparent: "bg-transparent",
};

// Rounded
const roundedClasses: Record<RoundedSize, string> = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "4xl": "rounded-4xl",
  full: "rounded-full",
};

function HairShadowBox({
  fontFamily = "opensauce",
  fontSize = "normal",
  fontWeight = "normal",
  color = "black",
  rounded = "lg",
  bgColor = "white",
  className,
  children,
  borderEnable = false,
  borderSize = "none",

  // shadow props
  shadowEnable = false,
  shadowColor = "secondary",
  shadowWidth = "100%", // ✅ default full width
  shadowHeight = "100%", // ✅ default full height
  offsetX = "5px",
  offsetY = "5px",
  shadowPosition = {},
  ...props
}: HairButtonProps) {
  return (
    <div className={clsx("relative", shadowEnable && "mt-4")}>
      {/* shadow box (only when enabled) */}
      {shadowEnable && (
        <div
          className={clsx(
            "absolute",
            bgClasses[shadowColor],
            roundedClasses[rounded]
          )}
          style={{
            width: shadowWidth === "auto" ? "100%" : shadowWidth,
            height: shadowHeight === "auto" ? "100%" : shadowHeight,
            transform: `translate(${offsetX}, ${offsetY})`,
            top: shadowPosition.top ?? "0",
            left: shadowPosition.left ?? "0",
            right: shadowPosition.right ?? "auto",
            bottom: shadowPosition.bottom ?? "auto",
          }}
        ></div>
      )}

      {/* main button */}
      <div
        className={clsx(
          `relative transition-colors duration-200 cursor-pointer ${
            borderEnable && "border"
          }`,
          roundedClasses[rounded],
          fontSizeClasses[fontSize],
          fontFamilyClasses[fontFamily],
          fontWeightClasses[fontWeight],
          buttonColorClasses[color],
          buttonBgColorClasses[bgColor],
          borderSizeClasses[borderSize],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export default HairShadowBox;
