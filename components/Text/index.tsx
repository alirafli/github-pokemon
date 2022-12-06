import React from "react";
import classNames from "classnames";

type Props = {
  variant?: string;
  weight?: string;
  className?: string;
  children: React.ReactNode;
};

type Variant = {
  [key: string]: string;
};

const VARIANT: Variant = {
  h1: "text-2xl md:text-3xl lg:text-4xl",
  h2: "text-lg md:text-xl lg:text-2xl",
  p1: "text-base md:text-lg lg:text-xl",
  p2: "text-xs md:text-sm lg:text-sm",
  p3: "text-xs",
};

const WEIGHT: Variant = {
  bold: "font-bold",
  semiBold: "font-semibold",
  normal: "font-normal",
  light: "font-light",
};

const Text = ({
  variant = "p1",
  weight = "normal",
  className,
  children,
  ...other
}: Props) => {
  if (variant === "h1" || "h2") {
    return (
      <h1
        className={classNames(className, VARIANT[variant], WEIGHT[weight])}
        {...other}
      >
        {children}
      </h1>
    );
  }

  return (
    <p
      className={classNames(className, VARIANT[variant], WEIGHT[weight])}
      {...other}
    >
      {children}
    </p>
  );
};

export default Text;
