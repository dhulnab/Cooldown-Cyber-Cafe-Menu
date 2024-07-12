import React from "react";
import styles from "./ProductsGrid.module.css";
import Container from "../container/Container";
import product1 from "../../../public/product1.jpg";
import product2 from "../../../public/product2.jpg";
import product3 from "../../../public/product3.jpg";
import product4 from "../../../public/product4.jpg";
import Image from "next/image";

function ProductsGrid() {
  const items = [
    { img: product1, name: "جوكلت فرابتشينو", price: "9,000" },
    { img: product2, name: "ايس اميركانو", price: "7,000" },
    { img: product3, name: "جاك سبارو يوكرت", price: "6,000" },
    { img: product4, name: "كولداون شيك", price: "5,000" },
  ];
  return (
    <Container>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.imgBox}>
              <Image
                src={item.img}
                alt="product"
                fill
                className={styles.img}
              />
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
