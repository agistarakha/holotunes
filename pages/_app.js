import "tailwindcss/tailwind.css";
import Layout from "../components/layouts/global-layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
