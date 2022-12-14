import React from "react";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  className?: string;
  border?: "none" | "border1";
  to?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type Variant = {
  [key: string]: string;
};

const STYLE: string =
  "mx-2 rounded-md px-3 py-1 hover:text-gray-300 transition ease-in-out";

const BORDER: Variant = {
  none: "",
  border1: " border-2 border-gray-700",
};

export const Button = ({
  className,
  border = "none",
  to = "/",
  children = "your text",
  ...other
}: Props) => {
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

export const ATagButton = ({
  className,
  border = "none",
  to = "/",
  children = "your text",
  ...other
}: Props) => {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      <button className={classNames(BORDER[border], className)} {...other}>
        {children}
      </button>
    </a>
  );
};

export const NoLinkBtn = ({
  className,
  border = "none",
  to = "/",
  children = "your text",
  ...other
}: Props) => {
  return (
    <button className={classNames(STYLE, BORDER[border], className)} {...other}>
      {children}
    </button>
  );
};
