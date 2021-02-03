import Layout from "../components/Layout";
import Header from "../components/Header";

import "../styles/global.css";
import "../styles/theme.css";
import "../styles/utility.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
