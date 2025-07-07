import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation";

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
        refreshInterval: 0, // or 1000 for auto-refresh every 1 sec
      }}
    >
      <>
        <GlobalStyle />
        <Component {...pageProps} />
        <Navigation />
      </>
    </SWRConfig>
  );
}

//Explicit error handling in fetcher fnct: helps to catch problems earlier and avoid bugs
//async/await: clearer, step-by-step code
//Checks if the HTTP response is OK (response.ok is true for status 200-299)
// If not OK (like 404 or 500), throws an error
// Returns parsed JSON if all ok
//Safer: it catches HTTP errors explicitly = app won’t treat an error page as valid data
// SWR (or any consumer) can handle the error properly
// Easier to debug issues since it throws errors early
