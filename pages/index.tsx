import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <p>
      <Link href="/resume/zh">Hello World</Link>
    </p>
  </Layout>
);

export default IndexPage;
