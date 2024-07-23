import Container from "@/component/container/Container";
import styles from "./page.module.css";
import Image from "next/image";
import ProductsGrid from "@/component/productsGrid/ProductsGrid";
import PageNameRedetection from "@/component/PageNameRedetection";

export const metadata = {
  title: "Gaming",
  description: "",
};
const Gaming = () => {
  return (
    <div>
      <PageNameRedetection />
      <Container>
        <div className={styles.logo}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
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
