"use client";
import React, { useEffect, useState } from "react";
import styles from "./ProductsGrid.module.css";
import Container from "../container/Container";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import UploadcareImage from "@uploadcare/nextjs-loader";

function ProductsGrid({ productName }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/${productName}/api`
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [productName]);

  if (loading) {
    return (
      <div className="loading">
        <Spin
          indicator={<LoadingOutlined spin />}
          size="large"
          style={{ color: "#a247dc" }}
        />
      </div>
    );
  }

  return (
    <Container>
      <div className={styles.grid}>
        {items.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.imgBox}>
              <UploadcareImage
                src={item.productImg}
                alt={item.productName}
                fill
                className={styles.img}
                priority
              />
            </div>
            <div className={styles.content}>
              <p className={styles.name}>{item.productName}</p>
              <p className={styles.price}>{item.productPrice} IQD</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProductsGrid;
