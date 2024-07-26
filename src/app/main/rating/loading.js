import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Container from "@/component/container/Container";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  return (
    <div>
      <Container style={{ minHeight: "90vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "75vh",
          }}
        >
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <div className="loading">
            <Spin
              indicator={<LoadingOutlined spin />}
              size="large"
              style={{ color: "#a247dc" }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Loading;
