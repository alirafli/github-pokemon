import classNames from "classnames";

type Props = {
  className?: string;
  placeHolder?: string;
}& React.InputHTMLAttributes<HTMLInputElement>;

const STYLE: string =
  "bg-primary px-2 py-1 rounded-md border border-gray-700 w-60 mx-2";

const Input = ({
  className,
  placeHolder = "type here...",
  ...rest
}: Props) => {
  return (
    <input
      className={classNames(STYLE, className)}
      placeholder={placeHolder}
      {...rest}
    />
  );
};

export default Input;
