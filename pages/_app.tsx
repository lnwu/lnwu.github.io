import type { AppProps } from "next/app";

import "normalize.css"
import "./app.css"

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
