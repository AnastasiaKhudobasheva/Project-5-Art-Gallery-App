import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 0, // or 1000 if you want auto-refresh
      }}
    >
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </SWRConfig>
  );
}
