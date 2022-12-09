import "../styles/globals.css";
import { Navbar } from "../components";
import type { AppProps } from "next/app";
import { SearchContextProvider } from "../context/SearchContext";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<any>
  };
};

function App({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <SearchContextProvider>
      <Navbar />
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </SearchContextProvider>
  );
}

export default App;
