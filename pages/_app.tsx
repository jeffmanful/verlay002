import Layout from "../components/Layout";

import "../styles/global.css";
import "../styles/theme.css";
import "../styles/utility.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
