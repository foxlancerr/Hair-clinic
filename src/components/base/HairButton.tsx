import React from "react";
import clsx from "clsx";

// Font & Style Types
type FontFamily = "opensauce" | "texgyrebonum" | "norwester" | "inter";
type FontSize = "small" | "normal" | "medium" | "large" | "xlarge";
type FontWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type ThemeColor = "primary" | "secondary" | "white" | "black" | "transparent";
type RoundedSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";
type BorderSize = "b1" | "b2" | "b3" | "b4" | "none";


// Props
interface HairButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  color?: ThemeColor;
  bgColor?: ThemeColor;
  rounded?: RoundedSize;
  shadowEnable?: boolean; // ✅ toggle shadow
  shadowColor?: ThemeColor; // ✅ default: secondary
  offsetX?: string; // ✅ shadow offset X
  offsetY?: string; // ✅ shadow offset Y
  className?: string;
  children: React.ReactNode;
  borderEnable?: boolean;
  borderSize?:BorderSize
}

// Size classes
const fontSizeClasses: Record<FontSize, string> = {
  small: "text-[14px] leading-[120%] px-3 py-1.5",
  normal: "text-[16px] leading-[150%] px-4 py-2",
  medium: "text-[18px] leading-[140%] px-5 py-2.5",
  large: "text-[20px] leading-[120%] px-6 py-3",
  xlarge: "text-[24px] leading-[120%] px-8 py-4",
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
  full: "rounded-full",
};


// Size classes
const borderSizeClasses: Record<BorderSize, string> = {
  b1: "border-1",
  b2: "border-2",
  b3: "border-3",
  b4: "border-4",
  none: "border-none",
};

function HairButton({
  fontFamily = "opensauce",
  fontSize = "normal",
  fontWeight = "normal",
  color = "white",
  rounded = "lg",
  shadowEnable = false,
  shadowColor = "secondary",
  offsetX = "5px",
  offsetY = "5px",
  bgColor = "black",
  className,
  children,
  borderEnable = false,
   borderSize = "b1",
  ...props
}: HairButtonProps) {
  return (
    <div className={clsx("inline-block relative", shadowEnable && "mt-4")}>
      {/* shadow box (only when enabled) */}
      {shadowEnable && (
        <div
          className={clsx(
            "absolute inset-0",
            roundedClasses[rounded],
            bgClasses[shadowColor]
          )}
          style={{
            transform: `translate(${offsetX}, ${offsetY})`,
          }}
        ></div>
      )}

      {/* main button */}
      <button
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
      </button>
    </div>
  );
}

export default HairButton;
