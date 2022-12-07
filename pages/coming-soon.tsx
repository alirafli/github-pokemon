import { useEffect } from "react";
import { useRouter } from "next/router";
import { Text, Meta } from "../components";
const ComingSoon = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1500);
  }, []);
  return (
    <>
      <Meta subTitle="Coming Soon" />
      <div>
        <Text>Coming Soon</Text>
      </div>
    </>
  );
};

export default ComingSoon;
