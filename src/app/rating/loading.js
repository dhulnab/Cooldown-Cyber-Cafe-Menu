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
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <p>
            <span>COOLDOWN</span>
            <br />
            اخبرنا عن تجربتك
          </p>
        </div>
        <div className="loading">
          <Spin
            indicator={<LoadingOutlined spin />}
            size="large"
            style={{ color: "#a247dc" }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Loading;
