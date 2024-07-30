import React from "react";
import Container from "../container/Container";
import styles from "./Banner.module.css";
import { Carousel } from "antd";
import Image from "next/image";

const fetchOffers = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const Banner = async () => {
  const offers = await fetchOffers();

  return (
    <Container>
      <p className={styles.offer}>العروض:</p>
      <Carousel autoplay className={styles.carousel}>
        {offers.map((offer) => (
          <div className={styles.banner} key={offer.id}>
            <Image
              src={`${offer.img}image.jpg`}
              alt={offer.name}
              fill
              priority
              className={styles.slide}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Banner;
