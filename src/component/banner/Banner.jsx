"use client";
import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import styles from "./Banner.module.css";
import { Carousel } from "antd";
import UploadcareImage from "@uploadcare/nextjs-loader";

const Banner = () => {
  const [loading, setLoading] = useState(true);
  const [offers, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/offers/api`
      );
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <Container>
      <p className={styles.offer}>العروض:</p>
      <Carousel autoplay className={styles.carousel}>
        {offers.map((offer) => (
          <div className={styles.banner} key={offer.id}>
            <UploadcareImage
              src={offer.productImg}
              alt={offer.productName}
              fill
              priority
              className={styles.slide}
            />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Banner;
