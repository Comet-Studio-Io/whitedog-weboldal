import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider contextSharing client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
