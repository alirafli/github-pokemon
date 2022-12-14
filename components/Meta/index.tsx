import Head from "next/head";

type HeaderProps = {
  title: string;
  subTitle: string;
  keywords: string;
  description: string;
};

const Meta = ({ title, subTitle, keywords, description }: HeaderProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link
        rel="icon"
        href="/favicon.png"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        href="/favicon.svg"
        media="(prefers-color-scheme: light)"
      />
      <title>
        {title} | {subTitle}
      </title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "GithubPoke",
  subTitle: "",
  keywords: "Github",
  description: "Clone github",
};

export default Meta;
