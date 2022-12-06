import Link from "next/link";
import Image from "next/image";
import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/router";
import LOGO from "../../public/images/github.svg";


const data = [
  {
    name: "Product",
    link: "/coming-soon",
  },
  {
    name: "Solution",
    link: "/coming-soon",
  },
  {
    name: "Open Source",
    link: "/coming-soon",
  },
  {
    name: "Pricing",
    link: "/coming-soon",
  },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-secondary flex items-center justify-between px-24 py-4 mb-7">
      <div className="flex items-center gap-11">
        <Link href="/">
          <div className="">
            <Image src={LOGO} alt="Vercel Logo" width={40} />
          </div>
        </Link>

        {data.map((data, index) => (
          <Link href={data.link} key={index}>
            <p>{data.name}</p>
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        {router.pathname !== "/" ? (
          <Input
            placeHolder="Search GitHub"
          />
        ) : (
          ""
        )}
        <Button to="/">Sign in</Button>
        <Button to="/" border="border1">Sign up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
