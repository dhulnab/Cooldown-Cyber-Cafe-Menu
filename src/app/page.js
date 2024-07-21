"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./globals.css";

export default function Loading() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/main";
    }, 3000);
  }, []);
  return (
    <div
      style={{
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#151528",
        width: "100%",
      }}
    >
      <div className="loadingImgBox">
        <Image
          priority
          src="/logo.png"
          alt="loading"
          width={170}
          height={170}
        />
      </div>
      <div className="loadingModel">
        <Spin
          indicator={<LoadingOutlined spin />}
          size="large"
          style={{ color: "#a247dc" }}
        />
      </div>
    </div>
  );
}
