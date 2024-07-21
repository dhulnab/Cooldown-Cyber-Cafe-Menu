import Container from "@/component/container/Container";
import styles from "./page.module.css";
import Image from "next/image";
import ProductsGrid from "@/component/productsGrid/ProductsGrid";

export const metadata = {
  title: "Gaming",
  description: "",
};
const Gaming = () => {
  return (
    <div>
      <Container>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <p>
            <span>COOLDOWN</span>
            <br />
            گيمنگ
          </p>
        </div>
      </Container>
      <ProductsGrid productName={"gaming"} />
    </div>
  );
};

export default Gaming;
