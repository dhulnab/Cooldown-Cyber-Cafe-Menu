import React from "react";
import Container from "../container/Container";
import styles from "./Banner.module.css";
import offer1 from "../../../public/offer.png";
import offer2 from "../../../public/offer2.png";
import Image from "next/image";
import { Carousel } from "antd";

const Banner = () => {
  const offers = [
    { id: 1, img: offer1 },
    { id: 2, img: offer2 },
  ];
  return (
    <Container>
      <p className={styles.offer}>العروض:</p>
      <Carousel autoplay className={styles.carousel}>
        {offers.map((offer) => (
          <div className={styles.banner} key={offer.id}>
            <Image src={offer.img} alt="offer" fill className={styles.slide} />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Banner;
