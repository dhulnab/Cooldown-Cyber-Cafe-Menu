import React from "react";
import styles from "./ProductsGrid.module.css";
import Container from "../container/Container";
import Image from "next/image";

const fetchProducts = async (productName) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${productName}/api`,
      { next: { revalidate: 1 } }
    );
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

const ProductsGrid = async ({ productName }) => {
  const items = await fetchProducts(productName);

  return (
    <Container>
      <div className={styles.grid}>
        {items.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.imgBox}>
              <Image
                src={`${item.productImg}image.jpg`}
                alt={item.productName}
                fill
                className={styles.img}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
};

export default ProductsGrid;
