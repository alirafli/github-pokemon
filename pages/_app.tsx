import "../styles/globals.css";
import { Navbar } from "../components";
import type { AppProps } from "next/app";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<any>
  };
};

function App({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <div>
      <Navbar />
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

export default App;
