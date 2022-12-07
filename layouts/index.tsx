type Props = {
  children: React.ReactNode;
};

export function IndexLayout({ children }:Props) {
  return (
    <div className="w-6/12 mx-auto mt-32">{children}</div>
  );
}
