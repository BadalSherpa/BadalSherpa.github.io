import React from "react";
import CustomHeader from "./Layout/Header";
import CustomContent from "./Layout/Content";
import { Layout } from "antd";

const Home = () => {
  return (
    <Layout>
      <CustomHeader style={{ background: "transparent" }} />
      <CustomContent />
    </Layout>
  );
};

export default Home;
