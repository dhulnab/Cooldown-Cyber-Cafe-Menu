"use client";
import React, { useEffect, useState } from "react";
import styles from "./ProductsGrid.module.css";
import Container from "../container/Container";
import Image from "next/image";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function ProductsGrid({ productName }) {
  const [product, setProduct] = useState(productName);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/products/${product}/api`
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        console.log(items);
      }
    }
    fetchData();
  }, [product]);

  if (loading) {
    return (
      <div className="loading">
        <Spin indicator={<LoadingOutlined spin />} size="large" style={{ color: "#a247dc" }}/>
      </div>
    );
  }

  return (
    <Container>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.imgBox}>
              <Image src={item.img} alt="product" fill className={styles.img} />
            </div>
            <div className={styles.content}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>{item.price} IQD</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProductsGrid;
