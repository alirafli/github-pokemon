import React from "react";
import classNames from "classnames";
import Link from "next/link";

type ButtonProps = {
  className?: string;
  border?: string;
  to: string;
  children: React.ReactNode;
};

type Border = {
  [key: string]: string;
};

const STYLE: string =
  "mx-2 rounded-md px-3 py-1 hover:text-gray-300 transition ease-in-out";

const BORDER: Border = {
  none: "",
  border1: " border-2 border-gray-700",
};

const Button = ({
  className,
  border = "none",
  to = "/",
  children = "your text",
  ...other
}: ButtonProps) => {
  return (
    <Link href={to}>
      <button
        className={classNames(STYLE, BORDER[border], className)}
        {...other}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
