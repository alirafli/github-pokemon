import { useEffect } from "react";
import { useRouter } from "next/router";
import { Meta } from "../components";
import Image from "next/image";
import UNDERCONSTRUCTION from "../public/images/Under_construction.svg";

const ComingSoon = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <>
      <Meta subTitle="Coming Soon" />
      <main className="w-fit mx-auto">
        <Image
          src={UNDERCONSTRUCTION}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </main>
    </>
  );
};

export default ComingSoon;
