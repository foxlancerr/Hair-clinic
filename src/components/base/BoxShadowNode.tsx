import React from "react";

// Allowed theme colors
export type ThemeColor = "primary" | "secondary" | "white" | "black" | "transparent";

// Allowed rounded values
export type RoundedSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

interface BoxShadowProps {
  as?: "button" | "div";
  shadowColor?: ThemeColor;   // default: secondary
  bgColor?: ThemeColor;       // default: white
  textColor?: ThemeColor;     // default: black
  borderColor?: ThemeColor;   // default: black
  rounded?: RoundedSize;      // default: md
  offsetX?: string;           // default: 5px
  offsetY?: string;           // default: 5px
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}


const bgClasses: Record<ThemeColor, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  white: "bg-white",
  black: "bg-black",
  transparent: "bg-transparent",
};

const textClasses: Record<ThemeColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  white: "text-white",
  black: "text-black",
  transparent: "text-transparent",
};

const borderClasses: Record<ThemeColor, string> = {
  primary: "border-primary",
  secondary: "border-secondary",
  white: "border-white",
  black: "border-black",
  transparent: "border-transparent",
};

const roundedClasses: Record<RoundedSize, string> = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

function BoxShadowNode({
  as = "button",
  shadowColor = "secondary",
  bgColor = "white",
  textColor = "black",
  borderColor = "black",
  rounded = "md",
  offsetX = "5px",
  offsetY = "5px",
  className = "",
  children,
  onClick,
}: BoxShadowProps) {
  const Component = as;

  return (
    <div className="relative inline-block mt-4">
      {/* shadow box */}
      <div
        className={`absolute inset-0 ${roundedClasses[rounded]} ${bgClasses[shadowColor]}`}
        style={{
          transform: `translate(${offsetX}, ${offsetY})`,
        }}
      ></div>

      {/* main node */}
      <Component
        className={`relative flex gap-2 items-start
          ${roundedClasses[rounded]} 
          ${bgClasses[bgColor]} 
          ${textClasses[textColor]} 
          ${borderClasses[borderColor]} 
          border 
          ${className}`}
        {...(as === "button" ? { onClick, type: "button" } : {})}
      >
        {children}
      </Component>
    </div>
  );
}

export default BoxShadowNode;
